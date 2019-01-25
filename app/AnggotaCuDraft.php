<?php
namespace App;

use illuminate\Database\Eloquent\Model;

class AnggotaCuDraft extends Model {
    
    protected $table = 'anggota_cu_draft';
    
    public static $rules = [
        'name' => 'required'
    ];
    
}