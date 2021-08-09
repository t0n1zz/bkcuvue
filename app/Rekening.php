<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rekening extends Model
{
    public $timestamps = false;
    protected $table = 'rekening';
    protected $fillable = ['no_cif','no_rek','saldo','id_cu'];
}
