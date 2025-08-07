<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\AnggotaCuDraftImportEscete;
use App\Imports\RekeningImportEscete;
use App\AnggotaCuCuDraft;
use App\AnggotaCuDraft;
use App\AnggotaProdukCuDraft;
use App\Cu;
use App\Imports\ProdukCuImportEscete;
use App\Jobs\StoreAnggotaDraft;
use App\Jobs\StoreRekeningDraft;
use Illuminate\Support\Facades\File;



class ImportCsvData extends Command
{
    protected $signature = 'csv:import';
    protected $description = 'Import anggota and rekening data from CSV files into draft and move to main if successful';


    public function handle()
    {
        $basePath = storage_path('app/Data CU');
        $orgDirs = glob($basePath . '/*', GLOB_ONLYDIR);

        foreach ($orgDirs as $orgDir) {
            $orgName = basename($orgDir);
            $dateDirs = glob($orgDir . '/*', GLOB_ONLYDIR);
            $id_cu = explode('-', $orgName)[0];

            foreach ($dateDirs as $dateDir) {
                $dateName = basename($dateDir);
                $anggotaPath = $dateDir . '/DATA_ANGGOTA.csv';
                $rekeningPath = $dateDir . '/DATA_REKENING.csv';
                $produkPath = $dateDir . '/DATA_PRODUK.csv';
                $this->info("📂 Processing: $orgName / $dateName");
                Cu::where('id', $id_cu)->update(['tanggal_update_data' => $dateName]);
                

                if (!file_exists($anggotaPath) || !file_exists($rekeningPath)) {
                    $this->error("❌ Missing files in $orgName/$dateName");
                    continue;
                }

                try {
                    // ✅ Clear draft BEFORE importing
                    // $this->info("🧹 Truncating draft tables...");
                    AnggotaCuDraft::where('escete', 1)->delete();
                    AnggotaCuCuDraft::where('escete', 1)->delete();
                    AnggotaProdukCuDraft::truncate();

                    
                    $this->info($orgName);
                    // ✅ Import CSVs
                    $this->info("⚙ Importing produk...");
                    Excel::import(new ProdukCuImportEscete, $produkPath);
                    $this->info("✅ Produk import done");
                    
                    $this->info("⚙ Importing data Anggota to Draft");
                    Excel::import(new AnggotaCuDraftImportEscete, $anggotaPath);
                    $this->info("✅ Anggota import done");

                    $this->info("⚙ Importing data Rekening to Draft");
                    Excel::import(new RekeningImportEscete, $rekeningPath);
                    $this->info("✅ Rekening import done");


                    $this->info("📤 Running");
                    AnggotaCuDraft::with([
                        'anggota_cu_cu.anggota',
                        'anggota_cu_by_name.status_jalinan',
                        'anggota_cu_by_nik.status_jalinan',
                        'anggota_cu_cu.rekening',
                        'anggota_cu_cu.sp',
                        'anggota_cu_cu.anggota.anggota_produk_cu.draft_produk'
                    ])->chunkById(200, function ($kelasChunk) {
                        $kelas_ktp = \App\System::findOrFail(1);
                        $no_nik = $kelasChunk->where('nik', '')->count();
                        $ktp = $kelas_ktp->nik;
                        $val = $ktp + $no_nik + 20;
                        $kelas_ktp->nik = str_pad($val, 16, "0", STR_PAD_LEFT);
                        $kelas_ktp->update();
                        dispatch(new StoreAnggotaDraft($kelasChunk->toArray(), $ktp));
                        $this->info("📤 Dispatched Anggota job");
                        sleep(1);
                    });

                    AnggotaProdukCuDraft::with(['anggota_produk_cu', 'anggota_cu_produk'])
                        ->chunkById(200, function ($chunk) {
                            dispatch(new StoreRekeningDraft($chunk->toArray()));
                            $this->info("📤 Dispatched Rekening job");
                        sleep(1);
                    });
                    File::deleteDirectory($dateDir);
                } catch (\Exception $e) {
                    $this->error("❌ [$orgName/$dateName] Import failed: " . $e->getMessage());
                }
            }
        }
    }
}
