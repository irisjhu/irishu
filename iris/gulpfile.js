'use strict';

// dependencies
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');


///////////////
// - SCSS/CSS
///////////////

const SCSS_SRC = './src/assets/scss/*.scss';
const SCSS_DEST = './src/assets/css';
const CSS_SRC = './src/assets/css/*.css';
const CSS_DEST = './src/assets/css/post';

function compile_scss() {
    return src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(dest(SCSS_DEST));
}

// detect changes in SCSS
function watch_scss(cb) {
    watch(SCSS_SRC, compile_scss);
    watch(CSS_SRC, auto_prefixer);
    cb();
}

// autoprefixer (for vendor prefixes)
function auto_prefixer() {
    return src(CSS_SRC)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(CSS_DEST));
}

// Run tasks
// gulp.task('default', watch_scss);

exports.compile_scss = compile_scss;
exports.watch_scss = watch_scss;
exports.auto_prefixer = auto_prefixer;
exports.default = watch_scss;