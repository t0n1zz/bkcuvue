<?php

namespace App\Console\Commands;

use App\HariLibur;
use App\PresensiAlpa;
use App\User;
use App\Presensi as Pres;
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
        $users = User::with('masuk','masuk.qr', 'kuliah', 'off', 'cuti', 'izin', 'aktivis.pekerjaan_aktif')->where('id_cu', 0)->get();
        $libur = HariLibur::whereDate('tanggal', Carbon::now()->toDateString())->first();

        if (!Carbon::now()->isSunday() && !$libur) {
            foreach ($users as $user) {
                if (!$user->masuk && !$user->kuliah && !$user->off && !$user->cuti && !$user->izin) {
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
                }elseif($user->masuk){
                    if(!$user->masuk->jam_pulang){
                        Pres::where('id', $user->masuk->id)->update(['jam_pulang' => $user->masuk->qr->jam_pulang]);
                    }
                }
            }
        }
    }
}
