<?php

namespace App\Http\ViewComposers;

use App\Cu;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class CuCountComposer
{
    public function compose(View $view)
    {
        $cuCount = Cu::count();

        $view->with('cuCount', $cuCount);
    }
}