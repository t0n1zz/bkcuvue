<?php
namespace App\Support;

use File;
use Image;
use Validator;
use Illuminate\Http\Request;

class ImageProcessing{

	public static function image_processing($imagepath, $thumb_width, $thumb_height, $request, $kelas)
	{
		$path = public_path($imagepath);

		if(!empty($kelas) && $request->gambar == "no_image"){
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
			$formatedName = '';
		}else{

			// validate image request
			$validator = Validator::make($request->all(), [
				'gambar' => 'image|mimes:jpeg,png,jpg|max:2048'
			]);

			if ($validator->fails()) {
					$formatedName = '';
					return $formatedName;
			}
			
			if(!empty($kelas) && $request->gambar != ''){
				File::delete($path . $kelas->gambar . '.jpg');
				File::delete($path . $kelas->gambar . 'n.jpg');
			}

			$imageData = $request->gambar;
			list($width, $height) = getimagesize($imageData);

			$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->name),10,'') . '_' .uniqid();
			$fileName =  $formatedName. '.jpg';
			$fileName2 =  $formatedName. 'n.jpg';

			//image
			if($width > 1920){
					Image::make($imageData->getRealPath())->resize(1920, null,
						function ($constraint) {
								$constraint->aspectRatio();
						})
						->save($path . $fileName);
			}else{
					Image::make($imageData->getRealPath())->save($path . $fileName);
			}

			//thumbnail image
			Image::make($imageData->getRealPath())->resize($thumb_width, $thumb_height,
				function ($constraint) {
						$constraint->aspectRatio();
				})
				->save($path . $fileName2);
		}

		return $formatedName;
	}
}
