/* gulp dependencies */
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCSS = require('gulp-minify-css');
var lessDependents = require('gulp-less-dependents');
var clean = require('gulp-clean');
var bower = require('gulp-bower');
var concat_vendor = require('gulp-concat-vendor');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
/* path def */
var path = {
    SRC: './app/'
,
    HTML: [
        'app/home/home.html',
        'app/view2/view2.html',
        'app/index.html'
    ],
    JS: [
        'app/app.js',
        'app/home/*.js',
        'app/view2/*.js'

    ],
    CSS: [
        'app/app.css',
        'app/bower_components/bootstrap/dist/css/bootstrap.css'
    ],
    IMG: [
        ''
    ],
    VENDOR: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-loader/angular-loader.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/html5-boilerplate/src/js/vendor/modernizr-2.8.3.min.js',
        'app/bower_components/bootstrap/dist/js/bootstrap.js',
        'app/bower_components/jquery/dist/jquery.js'
        // ...and more
    ],
    DIST: './dist'
};
/* spin up distribution server */
gulp.task('connect', ['build'], function() {
    connect.server({
        root: 'dist',
        port: 4005
     });
    // browserSync({
    //     server: {
    //         baseDir: 'dist'
    //     }
    // });
});

gulp.task('build', ['lint', 'css', 'vendor', 'js', 'html','copyLibs', 'watch'] );


/* spin up distribution server */
gulp.task('serve', ['rebuild'], function() {
    connect.server({
        root: 'dist',
        port: 4005
    });
    // browserSync({
    //     server: {
    //         baseDir: 'dist'
    //     }
    // });
});

gulp.task('rebuild', ['src'] );

/* clean up dist dir */
gulp.task('clean', function() {
    return gulp.src('./dist/*', {force: true})
        .pipe(clean());
});
/* jslint for debugging */
gulp.task('lint', function() {
    return gulp.src(path.JS)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
/* move css */
gulp.task('css', function () {
    gulp.src(path.CSS)
        .pipe(gulp.dest(path.DIST ));
// .pipe(gulp.dest(path.DIST + '/css'));
});

/* concat and compress app scripts */
gulp.task('js', function () {
    gulp.src(path.JS)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        //.pipe(gulp.dest(path.DIST ));
        .pipe(gulp.dest(path.DIST + '/js'));
});
/* concat vendor dependencies */
gulp.task('vendor', function () {
    gulp.src(path.VENDOR)
        .pipe(concat('vendor.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        // .pipe(gulp.dest(path.DIST ));
.pipe(gulp.dest(path.DIST + '/js'));
});

/* concat vendor dependencies */
gulp.task('copyLibs', function () {
    gulp.src(path.VENDOR)
        .pipe(gulp.dest(path.DIST ));
       // .pipe(gulp.dest(path.DIST + '/js'));
});
/* copy over markups */
gulp.task('html', function(){
    gulp.src(path.HTML, {base: 'app'})
        .pipe(gulp.dest(path.DIST));
});
/* compress images */
gulp.task('img', function(){
    gulp.src(path.IMG)
        .pipe(imagemin())
        // .pipe(gulp.dest(path.DIST ));
        .pipe(gulp.dest(path.DIST + '/img'));
});
/* watch all changes */
gulp.task('watch', function () {
    gulp.watch(path.SRC+'**/*.*', {usePolling: true},['build']);
    //gulp.watch(path.VENDOR, {usePolling: true},['vendor']);
    //gulp.watch(path.JS, {usePolling: true},['lint', 'js']);
    //gulp.watch(path.HTML, {usePolling: true},['html']);
    //gulp.watch(path.IMG,{usePolling: true}, ['img']);
});
/* defualt */
var all_tasks = ['lint', 'css', 'vendor', 'js', 'html', 'img'];
gulp.task('default', all_tasks);

