<?php

namespace App\Http\ViewComposers;

use App\Pengumuman;
use Illuminate\View\View;

class PengumumanCUComposer
{
    public function compose(View $view)
    {
        $pengumumanCUList = Pengumuman::orderBy('created_at')->select('name')->get();

        $view->with('pengumumanCUList', $pengumumanCUList);
    }
}