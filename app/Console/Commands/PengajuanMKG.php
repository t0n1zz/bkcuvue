<?php

namespace App\Console\Commands;

use App\AktivisPendidikan;
use App\MkgMax;
use App\MkgPengajuan;
use App\MkgSekarang;
use App\User;
use Illuminate\Console\Command;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;

class PengajuanMKG extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mkg:start';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Pengajuan MKG/GR';

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

        $model = MkgSekarang::with('pekerjaan_aktif', 'pengajuan')->get();


        foreach ($model as $mod) {
            try {
                if (!$mod->pengajuan) {
                    $id_user = null;
                    if ($mod->id_cu == 0) {
                        $id_user = User::where('id_aktivis', $mod->id_aktivis)->first()->id;
                    }

                    $pendidikan_terakhir = $mod->pendidikan_tertinggi;
                    if ($mod->pekerjaan_aktif->tingkat == 8) {
                        $mkg_max = MkgMax::where('pendidikan', $pendidikan_terakhir)->where('jabatan', 0)->first();
                    } else {
                        $mkg_max = MkgMax::where('pendidikan', $pendidikan_terakhir)->where('jabatan', 1)->first();
                    }

                    $staf_tetap = Carbon::createFromFormat('Y-m-d', $mod->tgl_masuk);
                    $now = Carbon::today();

                    $mkg = $mod->mkg;
                    $gr_d_max = $mkg_max->gr_d;
                    $gr_b_max = $mkg_max->gr_b;
                    $gr_d = $mod->gr_d;
                    $gr_b = $mod->gr_b;
                    $tgl_perubahan = Carbon::parse($staf_tetap)->setDate(Carbon::now()->year, Carbon::parse($staf_tetap)->month, Carbon::parse($staf_tetap)->day)->toDateString();

                    // Check if the day and month are the same as today
                    if (($now->year - $staf_tetap->year) % 4 == 0) {
                        if ($staf_tetap->day == $now->day && ($staf_tetap->month - $now->month) == 1) {
                            // GR
                            if ($gr_d < $gr_d_max || $gr_b < $gr_b_max) {
                                if (($gr_d == 1 || $gr_d == 2 || $gr_d == 3) && $gr_b == 4) {
                                    $gr_d = $gr_d + 1;
                                    $gr_b = 1;
                                } elseif (($gr_d == 1 || $gr_d == 2 || $gr_d == 3) && $gr_b < 4) {
                                    $gr_b = $gr_b + 1;
                                } elseif ($gr_d == 4 && $gr_b < 5) {
                                    $gr_b = $gr_b + 1;
                                }
                            }

                            if($mod->mkg_pengurang == 3 && $mod->gr_d < 3){
                                $gr_d = 3;
                                $gr_b = 1;
                            }

                            //MKG
                            if ($mod->mkg < 32) {
                                $mkg = $mkg + 2 - $mod->mkg_pengurang;
                            }

                            MkgPengajuan::create([
                                'id_aktivis' => 2245,
                                'id_cu' => 0,
                                'mkg' => $mkg,
                                'gr_d' => $gr_d,
                                'gr_b' => $gr_b,
                                'periode' => Carbon::now()->year,
                                'pendidikan_tertinggi' => $mod->pendidikan_tertinggi,
                                'tgl_perubahan' => $tgl_perubahan,
                                'id_user' => $id_user
                            ]);
                        }
                    } elseif (($now->year - $staf_tetap->year) % 2 == 0) {
                        if ($staf_tetap->day == $now->day && $staf_tetap->month == $now->month) {
                            //MKG
                            if ($mod->mkg < 32) {
                                $mkg = $mkg + 2 - $mod->mkg_pengurang;
                                MkgPengajuan::create([
                                    'id_aktivis' => 2245,
                                    'id_cu' => 0,
                                    'mkg' => $mkg,
                                    'gr_d' => $gr_d,
                                    'gr_b' => $gr_b,
                                    'periode' => Carbon::now()->year,
                                    'pendidikan_tertinggi' => $mod->pendidikan_tertinggi,
                                    'tgl_perubahan' => $tgl_perubahan,
                                    'id_user' => $id_user
                                ]);
                            }
                        }
                    }
                }
            } catch (\Throwable $th) {
                //throw $th;
            }
        }
    }
}
