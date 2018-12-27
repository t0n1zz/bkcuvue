<?php

namespace App\Http\ViewComposers;

use App\Aktivis;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;

class AktivisCountComposer
{
    public function compose(View $view)
    {
        $aktivisCount = Aktivis::count();

        $view->with('aktivisCount', $aktivisCount);
    }
}