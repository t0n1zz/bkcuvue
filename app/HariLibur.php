<?php

namespace App;

use App\Support\Dataviewer;
use Illuminate\Database\Eloquent\Model;

class HariLibur extends Model
{
    use Dataviewer;

    protected $table = 'hari_libur';

    protected $fillable = ['name','tanggal'];

    protected $allowedFilters = [
        'tanggal','name'
    ];

    protected $orderable = [
        'tanggal','name'
    ];
}
