const gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    babel           = require('gulp-babel'),
    compass         = require('gulp-compass'),
    autoprefixer    = require('gulp-autoprefixer');

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("scripts/*.js", ['js']);
    gulp.watch("sass/*.sass", ['styles']);
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("css/*.css").on("change", browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src(['./sass/style.sass'])
        .pipe(compass({
            config_file: './config.rb',
            sass     : 'sass',
            css      : 'css',
        }))
        .pipe(autoprefixer('last 20 version'))
        .pipe(gulp.dest('./css/'));
});

function complete(files, allName, directory) {
    gulp.src(files)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat(allName))
        .pipe(gulp.dest(directory));
}
gulp.task('scripts', function() {
    complete(["node_modules/jquery/dist/jquery.min.js",
            "node_modules/jquery-match-height/dist/jquery.matchHeight-min.js",
            "node_modules/jquery-validation/dist/jquery.validate.min.js",
            './scripts/main.js'],
        "all.js",
        "./js/");
    complete([
            "node_modules/jquery-match-height/dist/jquery.matchHeight-min.js",
            "scripts/jquery.validate-1.8.1.js",
            './scripts/main.js'],
        "all-ie.js",
        "./js/");
});

gulp.task('js', ['scripts'] , function () {
    return gulp.src('js/all.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);