<?php
namespace App\Support;

use File;
use Image;
use Validator;
use Illuminate\Http\Request;

class Helper{

	public static function image_processing($imagepath, $thumb_width, $thumb_height, $request, $kelas)
	{
		$path = public_path($imagepath);

		if(!empty($kelas) && $request->gambar == "no_image"){// no image
			File::delete($path . $kelas->gambar . '.jpg');
			File::delete($path . $kelas->gambar . 'n.jpg');
			$formatedName = '';
		}else{

			// validate image request
			$validator = Validator::make($request->all(), [
				'gambar' => 'image|mimes:jpeg,png,jpg|max:2048'
			]);

			if ($validator->fails()) {
				if(!empty($request->gambar)){
					return $request->gambar;
				}else{
					$formatedName = '';
					return $formatedName;
				}
			}
			
			if(!empty($kelas) && $request->gambar != ''){ //change image
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

	public static function dom_processing($request, $path)
	{
		$dom = new \DomDocument();

		$dom->loadHTML("<div>$request->content</div>");
		$container = $dom->getElementsByTagName('div')->item(0);
		$container = $container->parentNode->removeChild($container);

		while($dom->firstChild){
			$dom->removeChild($dom->firstChild);
		}

		while($container->firstChild){
			$dom->appendChild($container->firstChild);
		}

		$images = $dom->getElementsByTagName('img');
			// foreach <img> in the submited message
			foreach($images as $img){
				$src = $img->getAttribute('src');

					// if the img source is 'data-url'
				if(preg_match('/data:image/', $src)){ 
					preg_match('/data:image\/(?<mime>.*?)\;/', $src, $groups);
					$mimetype = $groups['mime']; 
					// Generating a random filename
					$filename = str_limit(preg_replace('/[^A-Za-z0-9\-]/', '',$request->name),10,'') . '_' .uniqid();
					$filepath = "$path.$filename.$mimetype";
					// You can put your directory to upload image 
					$image = Image::make($src)
					// resize if required
					/* ->resize(300, 200) */
					->encode($mimetype, 100) // encode file to the specified mimetype
					->save(public_path($filepath)); 
					$new_src = $filepath;
					$img->removeAttribute('src');
					$img->setAttribute('src', $new_src);
				} // <!--endif
			} // 

		return $dom->saveHTML();
	}

	public static function dom_processing_no_image($request)
	{
		$dom = new \DomDocument();

		$dom->loadHTML("<div>$request->content</div>");
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
