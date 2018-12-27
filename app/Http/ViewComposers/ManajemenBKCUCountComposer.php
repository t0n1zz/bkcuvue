<?php

namespace App\Http\ViewComposers;

use App\Aktivis;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class ManajemenBKCUCountComposer
{
    public function compose(View $view)
    {
        $tipe = 3;
        $id = 1;
            
        $manajemenBKCUCount = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')
        ->whereHas('pekerjaan', function($query) use ($id,$tipe){
            $query->whereIn('tingkat',[6,7,8,9])->where('tipe',$tipe)->where('id_tempat',$id)
            ->where(function($q){
                $q->where('selesai',null)->orWhere('selesai','>',date('Y-m-d'));
            });
        })->count();

        $view->with('manajemenBKCUCount', $manajemenBKCUCount);
    }
}