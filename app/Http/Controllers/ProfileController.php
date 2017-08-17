<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    function getUser(Request $request){
       return json_encode($request->user());
    }
}
