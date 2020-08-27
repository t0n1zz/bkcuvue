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
            
        $manajemenBKCUCount = Aktivis::with('pekerjaan_aktif.cu','pendidikan_tertinggi','Villages','Districts','Regencies','Provinces')->whereHas('pekerjaan',function($query) use ($tipe, $id){
            $query->where('tipe',$tipe)->where('id_tempat',$id)->whereIn('tingkat',[5,6,7,8,9])->where('status',1);
        })->count();

        $view->with('manajemenBKCUCount', $manajemenBKCUCount);
    }
}