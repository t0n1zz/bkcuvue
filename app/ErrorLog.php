<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;

class ErrorLog extends Model
{
    use Dataviewer;

    protected $table = 'error_logs';

    protected $fillable = [
        'id','message','context','level','level_name','channel','datetime','extra'
    ];

    protected $allowedFilters = [
        'message','context','level','datetime','created_at','updated_at'
    ];

    protected $orderable = [
        'level','datetime','created_at','updated_at'
    ];
}
