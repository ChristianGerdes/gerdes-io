var elixir = require('laravel-elixir');

config.sourcemaps = false;
config.assetsPath = 'resources';
config.css.autoprefix.options.browsers = ['last 20 versions'];

elixir(function(mix) {
	mix.sass('app.scss');

	mix.scripts([
		'vendor/jquery.min.js',
		'vendor/typed.min.js',
		'app.js'
	]);
});