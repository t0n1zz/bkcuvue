<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seragam extends Model
{
    protected $table = 'seragam';

    protected $fillable = [
        'name', 'deskripsi', 'created_at', 'updated_at'
    ];
}
