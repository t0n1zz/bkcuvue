<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FileUpload extends Model
{
    protected $table = 'file_upload';
    protected $fillable = ['id_user', 'id_cu', 'file_name', 'file_path','tipe','real_file_name'];
}
