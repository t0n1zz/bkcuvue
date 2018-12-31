<?php

namespace App\Http\ViewComposers;

use App\Pengumuman;
use Illuminate\View\View;

class PengumumanBKCUComposer
{
    public function compose(View $view)
    {
        $pengumumanBKCUList = Pengumuman::where('id_cu',0)->orderBy('created_at')->select('name')->get();

        $view->with('pengumumanBKCUList', $pengumumanBKCUList);
    }
}