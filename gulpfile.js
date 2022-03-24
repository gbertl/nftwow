const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

const styles = () => {
  return src('app/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
};

const scripts = () => {
  return src('app/js/script.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
};

const serve = (cb) => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    open: false,
  });
  cb();
};

const reload = (cb) => {
  browserSync.reload();
  cb();
};

const watchAll = () => {
  watch('*.html', reload);
  watch(
    ['app/scss/**/*.scss', 'app/js/**/*.js'],
    series(styles, scripts, reload)
  );
};

exports.default = series(styles, scripts, serve, watchAll);
