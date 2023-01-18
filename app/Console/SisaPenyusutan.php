<?php

namespace App\Console\Commands;

use App\AsetTetap;
use Illuminate\Console\Command;

class SisaPenyusutan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sisa:penyusutan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Menambah Sisa Penyusutan yang Kosong pada Database dengan Pokok Penyusutan';

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
        $sPenyusutan = AsetTetap::whereNull('sisa_penyusutan')->select('id', 'pokok_penyusutan')->get();
        $c = count($sPenyusutan);
        for ($i = 0; $i < $c; $i++) {
            AsetTetap::where("id", $sPenyusutan[$i]->id)->update(["sisa_penyusutan" => $sPenyusutan[$i]->pokok_penyusutan]);
        }
    }
}