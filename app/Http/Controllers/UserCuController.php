<?php

namespace App\Http\Controllers;

use App\AnggotaCu;
use App\AnggotaCuCu;
use App\AnggotaProdukCu;
use App\AnggotaProdukCuTransaksi;
use App\Cu;
use App\Kegiatan;
use App\penghasilanPengeluaran;
use App\UserCU;
use Carbon\Carbon;
use DateTime;
use Google\Service\CloudSearch\Card;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use MaddHatter\LaravelFullcalendar\Facades\Calendar;

class UserCuController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('preventBackHistory');
        $this->middleware('guest', ['except' => ['logout', 'changePass', 'passEditForm', 'store', 'userDashBoard', 'getKegiatan', 'getKegiatanWithStatus', 'mulaiTerdekat', 'indexSimulasiPinjaman', 'kalenderKegiatan', 'mutasiRekening', 'getRekening', 'storePenghasilan']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('userCuLogin');
    }

    public function passEditForm()
    {
        return view('changePassword');
    }

    public function userDashBoard()
    {
        if (Auth::user()->isChangePassword == null) {
            return redirect('editpass');
        } else {
            return view('dashBoardUserCU');
        }
    }




    //Kelendar Kegiatan
    // public function kalenderKegiatan(){
    //     $events = [];
    //     $data = Kegiatan::where('status',1)->orWhere('status',2)->orWhere('status',3)->get();

    //     if($data->count()) {
    //         foreach ($data as $key => $value) {
    //             $url = 'detail/'.$value->id;
    //             $events[] = Calendar::event(
    //                 $value->name,
    //                 true,
    //                 new \DateTime($value->mulai),
    //                 new \DateTime($value->selesai.' +1 day'),
    //                 $value->id,
    //                 [
    //                     'color' => '#f05050',
    //                     'url' => $url,
    //                 ]
    //             );
    //         }
    //     }

    //     $calendar = Calendar::addEvents($events)->setOptions(['aspectRatio'=>1,'themeSystem' => 'bootstrap4', 'lang'=>'id','header' => [
    //         'left' => 'prev,next',
    //         'center' =>'title',
    //         'right' =>'today'],]);

    //     return view('_components\eventCalendar', compact('calendar'));
    // }

    // public function getData(){
    //     $data = Kegiatan::paginate(10);

    // }

    public function changePass(Request $request)
    {
        $request->validate([
            'password' => 'required|min:6|same:password_confirmation',
            'password_confirmation' => 'required|min:6'
        ]);
        $usercu = UserCU::findOrFail(Auth::guard('userscu')->user()->id);
        $usercu->password = bcrypt($request->password);
        $usercu->isChangePassword = 1;
        $usercu->update();
        return redirect('/userdashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        // $secret = "6LddskEhAAAAAGXNm56Bj4u2_hDRQaKY0RmOo4pj";
        // $response = $request->captcha;
        // $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
        // $captcha_success = json_decode($verify);
        // if ($captcha_success->success == false) {
        // } else if ($captcha_success->success == true) {
        $no_ba = $request->no_ba;
        $user = UserCU::with(['anggota_cu', 'anggota_cu_cu'])->where('username', $no_ba)->get()->first();
        if (strpos($no_ba, '.')) {
            $no_ba = str_replace('.', '', $no_ba);
        }
        $slugs = explode(".", str_replace('https://', '', url()->current()));
        $slug = $slugs[0];
        $cu = Cu::select('id')->where('slug', $slug)->first();
        if ($user == null) {
            $tgl_lahir =  $request->password;
            $date = DateTime::createFromFormat('dmY', trim($tgl_lahir));
            $user_ba = AnggotaCuCu::whereRaw("REPLACE(`no_ba`, '.', '') = ?", [$no_ba])->first();
            if ($user_ba != null) {
                if ($user_ba->cu_id == $cu->id) {
                    if (DateTime::createFromFormat('dmY', trim($tgl_lahir)) == true) {
                        if ($date->format('Y-m-d') == AnggotaCu::where('id', $user_ba->anggota_cu_id)->pluck('tanggal_lahir')->first()) {
                            $new_user = new UserCU();
                            $new_user->id_cu = $user_ba->cu_id;
                            $new_user->anggota_cu_cu_id = $user_ba->id;
                            $new_user->anggota_cu_id = $user_ba->anggota_cu_id;
                            $new_user->username = $request->no_ba;
                            $new_user->password = bcrypt($request->password);
                            $new_user->name = AnggotaCu::where('id', $user_ba->anggota_cu_id)->pluck('name')->first();
                            $new_user->save();
                            if (Auth::guard('userscu')->attempt(['username' => $request->no_ba, 'password' => $request->password])) {
                                return response()->json([
                                    'message' => 'editpass',
                                    'type' => 'auth'
                                ]);
                                return redirect('editpass');
                            } else {
                                return redirect('login');
                            }
                        } else {
                            return response()->json([
                                'message' => 'Password atau nomor BA Salah',
                                'type' => 'not auth'
                            ]);
                        }
                    } else {
                        return response()->json([
                            'message' => 'Password atau nomor BA Salah',
                            'type' => 'not auth'
                        ]);
                    }
                } else {
                    return response()->json([
                        'message' => 'Password atau nomor BA Salah',
                        'type' => 'not auth'
                    ]);
                }
            } else {
                return response()->json([
                    'message' => 'Password atau nomor BA Salah',
                    'type' => 'not auth'
                ]);
            }
        } else {
            if (Auth::guard('userscu')->attempt(['username' => $request->no_ba, 'password' => $request->password])) {
                return response()->json([
                    'url' => url('/userdashboard'),
                    'type' => 'auth',
                    'data' => $user
                ]);
            } else {
                return response()->json([
                    'message' => 'Password atau nomor BA Salah',
                    'type' => 'not auth'
                ]);
            }
        }
        // }
    }

    public function logout()
    {
        Auth::guard('userscu')->logout();
        return redirect('/login');
    }

    public function indexSimulasiPinjaman()
    {
        return view('Simulasi Pinjaman');
    }


    public function mutasiRekening()
    {

        if (Auth::user()->isChangePassword == null) {
            return redirect('editpass');
        } else {
            $data = AnggotaProdukCu::with('produk_cu')->where('anggota_cu_cu_id', Auth::user()->anggota_cu_cu_id)->select('id', 'produk_cu_id')->get();
            return view('mutasiRekening',['data'=>$data]);
        }
    }


    public function getRekening(Request $request)
    {
        $tipe = 'semua';

        if(isset($request->tipe)){
            $tipe = $request->tipe;
        }

        if($tipe=='semua'){
            $dataSimpanan = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $request->id_produk_simpanan)->paginate(10);
            $dataPinjaman = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $request->id_produk_pinjaman)->paginate(10);
            return response()->json([
                'dataSimpanan' => $dataSimpanan,
                'linksSimpanan' => $dataSimpanan->links()->toHtml(),
                'dataPinjaman' => $dataPinjaman,
                'linksPinjaman' => $dataPinjaman->links()->toHtml(),
            ]);
        }elseif($tipe=='simpanan'){
            $dataSimpanan = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $request->id)->paginate(10);
            return response()->json([
                'dataSimpanan' => $dataSimpanan,
                'linksSimpanan' => $dataSimpanan->links()->toHtml(),
            ]);
        }else{
            $dataPinjaman = AnggotaProdukCuTransaksi::where('anggota_produk_cu_id', $request->id)->paginate(10);
            return response()->json([
                'dataPinjaman' => $dataPinjaman,
                'linksPinjaman' => $dataPinjaman->links()->toHtml(),
            ]);
        }
    }



    public function storePenghasilan(Request $request)
    {

        $user = Auth::user();
        if ($request->isMethod('post')) {
            $model = penghasilanPengeluaran::where('id_cu', $user->id_cu)->where('id_user', $user->id)->where('tgl_input', Carbon::now()->toDateString());
            if($model->first()){
                $model->update([
                    'penghasilan' => $request->penghasilan,
                    'pengeluaran' => $request->pengeluaran
                ]);
            }else{
                penghasilanPengeluaran::create([
                    'id_cu' => $user->id_cu,
                    'anggota_cu_id' => $user->anggota_cu_id,
                    'id_user' => $user->id,
                    'tgl_input' => Carbon::now()->toDateString(),
                    'penghasilan' => $request->penghasilan,
                    'pengeluaran' => $request->pengeluaran
                ]);
            }
        }

        $model = penghasilanPengeluaran::where('id_cu',$user->id_cu)->where('id_user',$user->id)->orderBy('tgl_input','desc')->paginate(5);
        return response()->json([
            'data'=>$model,
            'links'=>$model->links()->toHtml()
        ]);
    }

    // public function getKegiatan(Request $request){
    //     $startDate = Carbon::now();

    //     if($request->mode=='terbaru'){
    //         $event = Kegiatan::with('Provinces','Districts','tempat')->where('status',1)->get();
    //     }elseif($request->mode=='terdekat'){
    //         $event = Kegiatan::whereBetween('mulai', [$startDate->format("Y-m-d"), $startDate->addDays(5)->format("Y-m-d")])->get();
    //     }elseif($request->mode=='terbuka'){
    //         $event = Kegiatan::with('Provinces','Districts','tempat')->where('status','2')->get();
    //     }else{
    //         $event = Kegiatan::with('Provinces','Districts','tempat')->where('status','4')->get();
    //     }

    //     return response()->json([
    //         'data'=>$event->take(5),

    //     ]);
    // }
}
