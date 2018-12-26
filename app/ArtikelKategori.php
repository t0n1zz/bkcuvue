<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\Dataviewer;
use Spatie\Activitylog\Traits\LogsActivity;

class ArtikelKategori extends Model {
    
    use Dataviewer, LogsActivity;

    protected $table = 'artikel_kategori';

    protected static $logFillable = true;
    
    public static $rules = [
        'id_cu' => 'required',
        'name' => 'required',
        'deskripsi' => 'required|min:5'
    ];
    
    protected $fillable = ['id_cu','name','deskripsi'];

    protected $allowedFilters = [
        'id','id_cu','name','deskripsi','created_at','updated_at','has_artikel_count'
    ];

    protected $orderable = [
        'id','id_cu','name','deskripsi','created_at','updated_at','has_artikel_count'
    ];

    public function artikel(){
        return $this->hasMany('App\Artikel','id_artikel_kategori','id')
            ->where('status','=','1')
            ->orderBy('created_at','desc')
            ->take(3);
    }
    

    public static function initialize(){
        return [
            'id_cu' => '', 'name' => '', 'deskripsi' => ''
        ];
    }

    public function hasartikel()
    {
        return $this->hasMany('App\Artikel','id_artikel_kategori','id');
    }

    public function Cu()
    {
        return $this->belongsTo('App\Cu','id_cu','id')->select('id','name');
    }
}