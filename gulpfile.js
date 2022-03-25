import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
const bs = browserSync.create();

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

const images = () => {
  return src('img/**/*').pipe(imagemin()).pipe(dest('dist/img'));
};

const serve = (cb) => {
  bs.init({
    server: {
      baseDir: './',
    },
    open: false,
  });
  cb();
};

const reload = (cb) => {
  bs.reload();
  cb();
};

const watchAll = () => {
  watch('*.html', reload);
  watch(
    ['app/scss/**/*.scss', 'app/js/**/*.js'],
    series(styles, scripts, reload)
  );
  watch('img/**/*', series(images, reload));
};

export default series(styles, scripts, images, serve, watchAll);
