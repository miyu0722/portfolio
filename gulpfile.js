var gulp = require("gulp");
var sass = require("gulp-sass");//sassをコンパイルする
var uglify = require("gulp-uglify");//JSを圧縮する
var imagemin = require('gulp-imagemin');//画像の見た目を変えずに圧縮する
var notify = require('gulp-notify');//お知らせ

var browserSync  = require('browser-sync');//ブラウザをオートリロードする
var reload        = browserSync.reload;
var source = ["www/**/*"];

gulp.task("sass", function() {
    gulp.src("assets/sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("www/css/"))
        .pipe(notify("Compiled Sass"));
});

gulp.task("uglify", function() {
    gulp.src(["assets/js/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("www/js/"));
});

gulp.task("imagemin", function() {
    gulp.src(["assets/img/**/*"])
        .pipe(imagemin())
        .pipe(gulp.dest("www/img/"));
});

gulp.task('server', function () {
  browserSync({
    notify: false,
    browser: 'google chrome',
    server: {
      baseDir: "www"
    }
  });
  gulp.watch('assets/sass/**/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['uglify']);
  gulp.watch('assets/img/**/*', ['imagemin']);
  gulp.watch(source, reload);
});

gulp.task("default", ["server"]);
