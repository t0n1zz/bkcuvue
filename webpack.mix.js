let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
  'resources/assets/css/bootstrap.min.css', 
  'resources/assets/css/bootstrap_limitless.min.css', 
  'resources/assets/css/layout.min.css',
  'resources/assets/css/components.min.css',
  'resources/assets/css/colors.css',
], 'public/css/admin/libs.css');

mix.scripts([
  'resources/assets/js/assets/main/jquery.min.js',
  'resources/assets/js/assets/main/bootstrap.bundle.min.js',
  'resources/assets/js/assets/plugins/loaders/blockui.min.js',
  'resources/assets/js/assets/plugins/ui/slinky.min.js',
  'resources/assets/js/assets/app.js',
  'resources/assets/js/assets/plugins/forms/styling/uniform.min.js',
], 'public/js/admin/libs.js')