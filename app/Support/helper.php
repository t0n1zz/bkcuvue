<?php
namespace App\Support;

use File;
use Image;
use Validator;
use App\LaporanTp;
use App\LaporanCu;
use Illuminate\Http\Request;

class Helper{

	public static function image_processing($imagepath, $thumb_width, $thumb_height, $request, $kelas, $name)
	{
		$path = public_path($imagepath);
		$formatedName = '';

		if($kelas != '' && $request == "no_image"){// no image
			File::delete($path . $kelas . '.jpg');
			File::delete($path . $kelas . 'n.jpg');
		}else{

			// validate image request
			// $validator = Validator::make($request, [
			// 	'gambar' => 'image|mimes:jpeg,png,jpg'
			// ]);

			// if ($validator->fails()) {
			// 	if(!empty($request)){
			// 		return $request;
			// 	}else{
			// 		$formatedName = '';
			// 		return $formatedName;
			// 	}
			// }

			// no image change
			if($kelas == $request){
				return $request;
			}
			
			// delete old image
			if($kelas != '' && $request != ''){ 
				File::delete($path . $kelas . '.jpg');
				File::delete($path . $kelas . 'n.jpg');
			}

			if($request != 'no_image'){
				$imageData = $request;
				list($width, $height) = getimagesize($imageData);
	
				$formatedName = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$name),10,'') . '_' .uniqid();
				
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
		}

		return $formatedName;
	}

	public static function dom_processing($request, $path)
	{
		$dom = new \DomDocument();
		libxml_use_internal_errors(true);
		$dom->loadHTML(mb_convert_encoding($request->content, 'HTML-ENTITIES', "UTF-8"), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
		$images2 = $dom->getElementsByTagName('img');

		foreach ($images2 as $img2) {
				$src2 = $img2->getAttribute('src');
				$array2[] = $src2;
		}
 
		return $dom->saveHTML();
	}

	public static function dom_processing_no_image($request)
	{
		$dom = new \DomDocument();
		
		libxml_use_internal_errors(true);
		$dom->loadHTML("<div>$request->content</div>");
		libxml_clear_errors();
		
		$container = $dom->getElementsByTagName('div')->item(0);
		$container = $container->parentNode->removeChild($container);

		while($dom->firstChild){
			$dom->removeChild($dom->firstChild);
		}

		while($container->firstChild){
			$dom->appendChild($container->firstChild);
		}

		return $dom->saveHTML();
	}

}
