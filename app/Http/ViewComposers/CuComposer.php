<?php

namespace App\Http\ViewComposers;

use App\Cu;
use Illuminate\View\View;

class CuComposer
{
    public function compose(View $view)
    {
        $cuList = Cu::orderBy('name')->select('slug','name')->get()->chunk(10);

        $view->with('cuList', $cuList);
    }
}