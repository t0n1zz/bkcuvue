<?php

namespace App\Console\Commands;

use App\AsetTetap;
use Illuminate\Console\Command;
use DateTime;

class HitungPenyusutan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hitung:penyusutan';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Menghitung Penyusutan Asset Tetap Setiap Hari';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = AsetTetap::select('id', 'pokok_penyusutan', 'bulan_penyusutan', 'sisa_penyusutan', 'sisa_bulan_penyusutan', 'tanggal')->get();
        $now = new DateTime();
        $c = count($data);
        $dateNow = $now->format('d');
        dd(substr($data[1]->tanggal, 8, 2));

        for ($i = 0; $i < $c; $i++) {
            if ($data[$i]->pokok_penyusutan && $data[$i]->bulan_penyusutan) {
                if ($dateNow == substr($data[$i]->tanggal, 8, 2) && $data[$i]->sisa_bulan_penyusutan > 0) {
                    $penyusutanPerBulan = $data[$i]->pokok_penyusutan / $data[$i]->bulan_penyusutan;
                    $sisaPenyusutan = $data[$i]->sisa_penyusutan - $penyusutanPerBulan;
                    $sisaBulanPenyusutan = $data[$i]->sisa_bulan_penyusutan - 1;

                    AsetTetap::where("id", $data[$i]->id)->update(["sisa_penyusutan" => $sisaPenyusutan, "sisa_bulan_penyusutan" => $sisaBulanPenyusutan]);
                }
            }
        }
        return 0;
    }
}