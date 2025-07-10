<?php

namespace App\Imports;

use Auth;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use App\SertifikatGetNomor;
use App\SertifikatGetNomorPeserta;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class UploadPesertaImport implements ToCollection, WithHeadingRow, WithChunkReading, WithBatchInserts
{
    protected $validRows = 0;
    protected $sertifikatGetNomorId;

    protected $periode;
    public function collection(Collection $rows)
    {
        if ($rows->isEmpty()) return;

        // Ambil nama_kegiatan dan periode dari baris pertama
        $firstRow = $rows->first();
        $this->periode = $firstRow['periode'];
        if (empty($firstRow['nama_kegiatan']) || empty($firstRow['periode'])) {
            // Jika header penting kosong, hentikan proses
            return;
        }

        // Simpan ke sertifikat_get_nomor (sekali saja)
        $sertifikat = SertifikatGetNomor::create([
            'aktivis_id' => Auth::user()->getId(),
            'kegiatan_name' => $firstRow['nama_kegiatan'],
            'jumlah_nomor_sertifikat' => 0, // diisi nanti setelah hitung peserta valid
            'periode' => Date::excelToDateTimeObject($firstRow['periode']),
        ]);

        $this->sertifikatGetNomorId = $sertifikat->id;

        // Simpan data peserta
        foreach ($rows as $row) {
            // Validasi baris
            if (!empty($row['nama_peserta'])) {
                SertifikatGetNomorPeserta::create([
                    'sertifikat_get_nomor_id' => $sertifikat->id,
                    'nama' => $row['nama_peserta'],
                    'keterangan' => $row['keterangan'] ?? '',
                ]);

                $this->validRows++;
            }
        }

        // Update jumlah peserta valid
        $sertifikat->update([
            'jumlah_nomor_sertifikat' => $this->validRows
        ]);
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    public function batchSize(): int
    {
        return 1000;
    }

    public function getValidRowCount()
    {
        return $this->validRows;
    }

    public function getSertifikatId()
    {
        return $this->sertifikatGetNomorId;
    }

    public function getPeriode(){
        return $this->periode;
    }
}
