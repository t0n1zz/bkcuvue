<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\AsetTetap;

class SisaBulanPenyusutan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sisa:bulanpenyusutan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Menambah Sisa Bulan Penyusutan dengan Bulan Penyusutan';

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
     * @return mixed
     */
    public function handle()
    {
        $sPenyusutan = AsetTetap::whereNull('sisa_bulan_penyusutan')->select('id', 'bulan_penyusutan')->get();
        $c = count($sPenyusutan);
        for ($i = 0; $i < $c; $i++) {
            AsetTetap::where("id", $sPenyusutan[$i]->id)->update(["sisa_bulan_penyusutan" => $sPenyusutan[$i]->bulan_penyusutan]);
        }
    }
}