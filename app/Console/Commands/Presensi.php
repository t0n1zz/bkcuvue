<?php

namespace App\Console\Commands;

use App\PresensiAlpa;
use App\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class Presensi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'alpa:create';

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
        $users = User::with('masuk', 'kuliah', 'off','aktivis.pekerjaan_aktif')->where('id_cu', 0)->get();
     
        foreach ($users as $user) {
            if (!$user->masuk && !$user->kuliah && !$user->off) {
                try {
                    if ($user->id_aktivis  && $user->aktivis->pekerjaan_aktif->selesai == null && ($user->aktivis->pekerjaan_aktif->tingkat == 5 || $user->aktivis->pekerjaan_aktif->tingkat == 6 || $user->aktivis->pekerjaan_aktif->tingkat == 7 || $user->aktivis->pekerjaan_aktif->tingkat == 8)) {
                        PresensiAlpa::create([
                            'id_user' => $user->id,
                            'id_cu' => $user->id_cu,
                            'id_aktivis' => $user->id_aktivis,
                            'tanggal' => Carbon::now()->toDateString()
                        ]);
                    }
                } catch (\Throwable $th) {
                   
                }
                
                }
               
        }
    }
}
