<?php

namespace App\Http\ViewComposers;

use DB;
use App\Pengumuman;
use App\Cu;
use Illuminate\View\View;

class PengumumanBKCUComposer
{
    public function compose(View $view)
    {
        $pengumumanBKCUList = Pengumuman::where('id_cu',0)->orderBy('created_at')->select('name')->get();

        $birthdayList = Cu::whereRaw('DATE_FORMAT(ultah, "%d-%m") = DATE_FORMAT(CURDATE(), "%d-%m")')->select('id','name','ultah','slug', DB::raw('TIMESTAMPDIFF(YEAR, ultah, CURDATE()) AS usia'))->get();

        $view->with('pengumumanBKCUList', $pengumumanBKCUList)->with('birthdayList', $birthdayList);
    }
}