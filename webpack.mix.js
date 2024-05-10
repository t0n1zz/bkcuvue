let mix = require('laravel-mix');

mix.autoload({
  'jquery': ['$', 'window.jQuery', 'jQuery'],  
});

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

mix.webpackConfig({
  output: {
      publicPath: '/',
      chunkFilename: 'js/components/[name].js?id=[chunkhash]',
  }
});

// main vue 
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .version();


// for admin   
mix.styles([
  'resources/assets/css/_admin/bootstrap.min.css', 
  'resources/assets/css/_admin/bootstrap_limitless.min.css', 
  'resources/assets/css/_admin/layout.min.css',
  'resources/assets/css/_admin/components.min.css',
  'resources/assets/css/_admin/colors.css',
  'resources/assets/css/_admin/extras/animate.min.css',
], 'public/css/admin/libs.css');

mix.scripts([
  'resources/assets/js/_admin/main/jquery.min.js',
  'resources/assets/js/_admin/main/bootstrap.bundle.min.js',
  'resources/assets/js/_admin/plugins/loaders/blockui.min.js',
  'resources/assets/js/_admin/plugins/ui/slinky.min.js',
  'resources/assets/js/_admin/app.js',
  'resources/assets/js/_admin/plugins/forms/styling/uniform.min.js',
], 'public/js/admin/libs.js');

// for public
mix.styles([
  'resources/assets/css/_public/style.css',
  'resources/assets/css/_public/news.css',
  'resources/assets/css/_public/custom.css',
], 'public/css/public/libs.css');

mix.scripts([
  'resources/assets/js/_public/jquery.js',
  'resources/assets/js/_public/plugins.js',
  'resources/assets/js/_public/functions.js',
], 'public/js/public/libs.js');

mix.styles([
  'resources/assets/css/_public/rs-plugin/css/settings.css',
  'resources/assets/css/_public/rs-plugin/css/layers.css',
  'resources/assets/css/_public/rs-plugin/css/navigation.css',
], 'public/css/public/indexlibs.css');

mix.scripts([
  'resources/assets/js/_public/rs-plugin/js/jquery.themepunch.tools.min.js',
  'resources/assets/js/_public/rs-plugin/js/jquery.themepunch.revolution.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.actions.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.carousel.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.kenburn.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.migration.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.navigation.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.parallax.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.slideanims.min.js',
  'resources/assets/js/_public/rs-plugin/js/extensions/revolution.extension.video.min.js',
], 'public/js/public/indexlibs.js');



