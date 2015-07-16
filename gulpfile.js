var elixir = require('laravel-elixir');
require('laravel-elixir-browser-sync');

elixir(function(mix) {
    mix.less('app.less')
        .browserify('app.js')
        .browserSync([
            'resources/assets/**/*',
            'public/**/*.html'
        ], {
            server: {
                baseDir: "public"
            },
            proxy: false,
            open: false
        })
});