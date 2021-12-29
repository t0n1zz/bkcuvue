<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QueueException extends Model
{
    public $timestamps = false;
    protected $table = 'queue_exception';
    protected $fillable = ['line','error','id_cu','tipe','no_ba','kode_produk'];
}
