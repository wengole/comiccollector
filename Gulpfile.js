var gulp = require('gulp-help')(require('gulp'));
var plugins = require('gulp-load-plugins')();
var tildeImporter = require('node-sass-tilde-importer');

var CONFIG = {
    production: !!plugins.util.env.production,
    paths: {
        libs: {
            src: [
                'node_modules/font-awesome/css/font-awesome.min.css',
                'node_modules/font-awesome/fonts/*',
                'node_modules/what-input/dist/what-input.js',
                'node_modules/foundation-sites/dist/js/foundation.min.js',
            ],
            dist: 'assets/dist/lib'
        },
        css: {
            dist: 'assets/dist/css/'
        },
        js: {
            src: 'assets/src/js/**/[^_]*.js',
            dist: 'assets/dist/js'
        },
        templates: {
            src: 'assets/src/templates/**/*.html',
            dist: 'assets/dist/templates'
        },
        misc: {
            src: [
                'assets/src/**/*',
                '!assets/src/js/**/*',
                '!assets/src/css/**/*',
                '!assets/src/templates/**/*'
            ],
            dist: 'assets/dist/'
        }
    },
    sass: {
        config: {
            includePaths: [
                'node_modules/',
                'node_modules/bootstrap-sass/assets/stylesheets/',
                'node_modules/foundation-sites/scss'
            ],
            importer: tildeImporter
        },
        src: 'assets/src/css/**/*.scss'
    }
};

gulp.task('css', 'Build and minify CSS', function () {
    if (CONFIG.production) {
        gulp.src(CONFIG.sass.src)
            .pipe(plugins.sass(CONFIG.sass.config)
                .on('error', plugins.sass.logError))
            .pipe(gulp.dest(CONFIG.paths.css.dist));
    } else {
        gulp.src(CONFIG.sass.src)
            .pipe(plugins.sass(CONFIG.sass.config)
                .on('error', plugins.sass.logError))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(CONFIG.paths.css.dist));
    }
});

gulp.task('copy', 'Copy already built staticfiles', function () {
    "use strict";
    gulp.src(CONFIG.paths.libs.src)
        .pipe(plugins.copy(CONFIG.paths.libs.dist, {prefix: 1}));
    gulp.src(CONFIG.paths.js.src)
        .pipe(plugins.copy(CONFIG.paths.js.dist, {prefix: 3}));
    gulp.src(CONFIG.paths.templates.src)
        .pipe(plugins.copy(CONFIG.paths.templates.dist, {prefix: 3}));
    gulp.src(CONFIG.paths.misc.src)
        .pipe(plugins.copy(CONFIG.paths.misc.dist, {prefix: 2}));
});

gulp.task('watch', 'Watch for changes and build for development', function () {
    "use strict";
    gulp.watch(CONFIG.sass.src, ['css']);
    gulp.watch(CONFIG.paths.js.src, ['copy']);
    gulp.watch(CONFIG.paths.misc.src, ['copy']);
});

gulp.task('deploy', 'Run all the tasks needed for a deploy of the codebase', ['css', 'copy']);
