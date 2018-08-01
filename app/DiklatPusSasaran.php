<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class DiklatPusSasaran extends Model {

    protected $table = 'diklat_pus_sasaran';

    protected $fillable = [
       'name','deskripsi','created_at','updated_at','deleted_at'
    ];
}