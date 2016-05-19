var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify')
var uglifycss = require('gulp-uglifycss');
var ngAnnotate = require('gulp-ng-annotate');
var webserver = require('gulp-webserver');
var htmlmin = require('gulp-htmlmin');

// gulp.task('server', function() {
//     gulp.src("./public") 
//     .pipe(webserver({
//         livereload: true,
//         port: 9999, 
//         open: true
//     }))
// })

var watcher = gulp.watch(['./main/js/**/*.js', './main/styles/*.styl', './main/views/**/*.html', './main/*.html'], ['default']); //question default
watcher.on('change', function( event ) {
        console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('stylus', function() {
    gulp.src('./main/styles/*.styl')
        .pipe(stylus())
        .pipe(uglifycss())
        .pipe(concat('styles.css')) 
        .pipe(gulp.dest('./public/styles'))
});
gulp.task('javascript', function() {
    gulp.src('./main/js/**/*.js')
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./public/scripts'))
});
gulp.task('html', function() {
    gulp.src('./main/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public'))
});

gulp.task('index', function() {
    gulp.src('./main/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public'))
});

gulp.task('default', ['stylus', 'javascript', 'html', 'index']); //question
