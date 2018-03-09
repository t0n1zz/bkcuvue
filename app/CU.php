<?php
namespace App;

use illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;

class CU extends Model {
    
    use FilterPaginateOrder, LogsActivity, SoftDeletes;

    protected $table = 'cu';
		protected static $logFillable = true;
		protected $dates = ['deleted_at'];
    
    public static $rules = [
        'id_province' => 'required',
        'no_ba' => 'required',
        'name' => 'required|between:3,50'
    ];
    
    protected $fillable = [
      'id_village','id_district','id_regency','id_province','no_ba','name','gambar','badan_hukum','alamat','pos',
      'telp','hp','website','email','app','deskripsi','ultah',
      'bergabung','created_at','updated_at','deleted_at'
    ];

    protected $filter = [
			'id_village','id_district','id_regency','id_province','no_ba','name','badan_hukum','alamat','pos','telp','hp','website','email','app','deskripsi','ultah','bergabung','created_at','updated_at','deleted_at'
    ];

    public function getNameAttribute($value){
        return !empty($value) ? $value : '-';
    }

    public static function initialize(){
        return [
            'id_village' => '0', 'id_district' => '0', 'id_regency' => '0', 'id_province' => '0', 'no_ba' => '0', 'name' => '', 'gambar' => '',
            'badan_hukum' => '0', 'alamat' => '', 'pos' => '', 'telp' => '', 'hp' => '', 'website' => '', 'email' => '', 'app' => '', 'ultah' => '', 'bergabung' => ''
        ];
		}
		
		public function Provinces()
    {
        return $this->belongsTo('App\Region\Provinces','province_id','id')->select('id','name');
		}
		
		public function Regencies()
    {
        return $this->belongsTo('App\Region\Regencies','regency_id','id')->select('id','name');
		}
		
		public function Districts()
    {
        return $this->belongsTo('App\Region\Districts','district_id','id')->select('id','name');
		}
		
		public function Villages()
    {
        return $this->belongsTo('App\Region\Villages','village_id','id')->select('id','name');
    }
}