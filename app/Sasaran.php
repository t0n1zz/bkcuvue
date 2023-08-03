<?php

namespace App;

use illuminate\Database\Eloquent\Model;

class Sasaran extends Model
{

    protected $table = 'sasaran';

    protected $fillable = [
        'name', 'deskripsi', 'created_at', 'updated_at'
    ];
}
