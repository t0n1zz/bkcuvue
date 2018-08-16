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
  'resources/assets/bootstrap3/css/bootstrap.css',
  'resources/assets/css/admins/font-awesome/css/font-awesome.css',
  'resources/assets/css/admins/Ionicons/css/ionicons.css',
  'resources/assets/css/admins/AdminLTE.css',
  'resources/assets/css/admins/skins/skin-blue.css',  
], 'public/admins/css/libs.css');

mix.scripts([
  'resources/assets/js/admins/jquery/jquery.js',
  'resources/assets/js/admins/jquery-ui/jquery-ui.js',
  'resources/assets/bootstrap3/js/bootstrap.js',
  'resources/assets/js/admins/adminlte.js',
], 'public/admins/js/libs.js')