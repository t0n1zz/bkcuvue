<?php

namespace App\Http\Controllers;

use Response;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    
  public function download_file($filename){
    $destinationPath = public_path() . "/files/";
    $file= $destinationPath . $filename;

    return Response::download($file);
  }
  
}
