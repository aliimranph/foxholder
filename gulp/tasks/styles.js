var gulp = require('gulp');
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssnano'),
    sourcemaps  = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber');

gulp.task('scss', function () {
    return gulp.src('./static/scss/**/[^_]*.?(s)css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(scss({

        }).on('error', scss.logError))
        .pipe(autoprefixer({
            flexbox: true,
            grid: true,
            browsers: ['> 1%', 'last 5 years', 'Firefox > 20']
        }))
        .pipe(rename('foxholder.css'))
        .pipe(gulp.dest('./src'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src'));
});

