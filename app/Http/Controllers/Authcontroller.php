<?php

namespace App\Http\Controllers;

use DB;
use Hash;
use Date;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;
use App\User;
use Response;

class Authcontroller extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['username', 'password']);
        $captcha = request(['captcha']);

        if ($captcha['captcha']['isTrusted'] == true) {


            if (!$token = auth('api')->setTTL(720)->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            $id = Auth::user()->getId();
            $admin = User::find($id);

            if ($admin->status == 0) {
                return response()->json(['error' => 'Maaf akun anda tidak aktif'], 401);
            }

            $admin->login = Date::now();
            $admin->update();

            return $this->respondWithToken($token);
        } else {
            return response()->json(['error' => 'Captcha Salah'], 401);
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth('api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $id = auth('api')->user()->getId();
        $kelas = User::with('pus', 'cu', 'aktivis.pekerjaan_aktif.cu')->findOrFail($id);

        return response()->json([
            'access_token' => $token,
            'user' => $kelas,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    public function guard()
    {
        return Auth::Guard('api');
    }
}