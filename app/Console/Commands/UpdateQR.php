<?php

namespace App\Console\Commands;

use App\QrPresensi;
use Illuminate\Console\Command;

class UpdateQR extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'qr:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $time = \Carbon\Carbon::now()->toArray();
        QrPresensi::where('jenis', 'BERUBAH PERHARI')->update(['kode_qr' => $time['timestamp']]);
    }
}
