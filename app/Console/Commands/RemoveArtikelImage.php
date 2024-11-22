<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class RemoveArtikelImage extends Command
{
    protected $signature = 'remove:artikelimage';
    protected $description = 'Remove unused article images';
    protected $imagePath = 'images/artikel';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        try {
            // Step 1: Get all image paths used in all articles (checked = 0 or 1)
            $allArtikels = DB::table('artikel')->get();

            $allContentImages = [];
            foreach ($allArtikels as $artikel) {
                $allContentImages = array_merge($allContentImages, $this->extractImagePaths($artikel->content));
            }
            $allContentImages = array_unique($allContentImages); // Remove duplicates
        } catch (\Exception $e) {
            Log::error("Failed to retrieve or process Artikel data: " . $e->getMessage());
            return;
        }

        try {
            // Step 2: Retrieve all local images in public/images/artikel
            $localImages = File::files(public_path($this->imagePath));
            $baseImages = [];
            $thumbnailImages = [];

            foreach ($localImages as $file) {
                $filename = '/images/artikel/' . $file->getFilename();
                if (preg_match('/n\.jpg$/', $filename)) {
                    $thumbnailImages[] = $filename;
                } else {
                    $baseImages[] = $filename;
                }
            }
        } catch (\Exception $e) {
            Log::error("Failed to get or process local image paths: " . $e->getMessage());
            return;
        }

        try {
            // Step 3: Find unused images
            $unusedImages = array_diff($baseImages, $allContentImages);

            // Step 4: Delete unused images
            foreach ($unusedImages as $baseImage) {
                // Delete base image
                File::delete(public_path($baseImage));

                // Delete thumbnail image (if exists)
                $thumbnailImage = preg_replace('/\.jpg$/', 'n.jpg', $baseImage);
                if (File::exists(public_path($thumbnailImage))) {
                    File::delete(public_path($thumbnailImage));
                }
            }
        } catch (\Exception $e) {
            Log::error("Failed to delete unused images: " . $e->getMessage());
            return;
        }

        try {
            // Step 5: Update checked column to 1 for processed articles
            DB::table('artikel')->where('checked', 0)->update(['checked' => 1]);
            Log::info('RemoveArtikelImage job completed successfully.');
        } catch (\Exception $e) {
            Log::error("Failed to update checked column for Artikel: " . $e->getMessage());
        }
    }

    /**
     * Extract image paths from the article content.
     */
    protected function extractImagePaths($content)
    {
        $imagePaths = [];

        try {
            // Regex to extract src attributes from <img> tags
            preg_match_all('/<img[^>]+src="([^">]+)"/', $content, $matches);

            if (isset($matches[1])) {
                $imagePaths = array_map(function ($path) {
                    return rtrim($path, '"'); // Remove trailing quote if present
                }, $matches[1]);
            }
        } catch (\Exception $e) {
            Log::error("Failed to extract image paths with regex: " . $e->getMessage());
        }
        return $imagePaths;
    }
}
