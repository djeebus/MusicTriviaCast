'use strict';

var gulp    = require('gulp'),
    ts      = require('gulp-typescript'),
    useref  = require('gulp-useref'),
    merge   = require('merge2');

var tsPath = 'app/**/*.ts',
    htmlPath = 'app/*.html';

var tsProject = ts.createProject({
    declaration: true,
    noExternalResolve: false,
    noImplicitAny: false,
    outFile: 'app.js',
    target: 'ES5',
    typescript: require('typescript'),
});

gulp.task('html', ['scripts'], function () {
    var assets = useref.assets();
    return gulp.src(htmlPath)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function () {
    var libs = [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/knockout/build/output/knockout-latest.debug.js',
    ];
    return gulp.src(libs)
        .pipe(gulp.dest('app'));
});

gulp.task('scripts', ['vendor'], function () {
    var tsResult = gulp.src(tsPath)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task('watch', ['html'], function () {
    gulp.watch('node_modules/**/*.js', ['vendor']);
    gulp.watch(htmlPath, ['html']);
    gulp.watch(tsPath, ['scripts']);
});

gulp.task('default', ['html']);
