import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import babelify from "babelify";
import vueify from "vueify";
import uglify from "gulp-uglify";
import buffer from "vinyl-buffer";

gulp.task('default', () => {
    browserify({
            entries: 'src/dist.js',
            debug: true
        })
        .transform(babelify)
        .transform(vueify)
        .bundle()
        .pipe(source('star-rating.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});