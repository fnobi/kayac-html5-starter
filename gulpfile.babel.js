'use strict';

// import
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import pleeease from 'gulp-pleeease';
import browserify from 'browserify';
import riotify from "riotify";
import babelify from 'babelify';
import debowerify from 'debowerify';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import readConfig from 'read-config';
import watch from 'gulp-watch';


// const
const SRC = './src';
const CONFIG = './src/config';
const DEST = './public';


// css
gulp.task('sass', () => {
    const config = readConfig(`${CONFIG}/pleeease.json`);
    return gulp.src(`${SRC}/scss/style.scss`)
        .pipe(sass())
        .pipe(pleeease(config))
        .pipe(gulp.dest(`${DEST}/css`));
});

gulp.task('css', gulp.series('sass'));


// js
gulp.task('copy-bower', () => {
    const config = readConfig(`${CONFIG}/copy-bower.json`);
    return gulp.src(config.src, {
        cwd: 'bower_components'
    }).pipe(gulp.dest(`${DEST}/js/lib`));
});

gulp.task('browserify', () => {
    return browserify(`${SRC}/js/script.js`)
        .transform(riotify, {
            template: 'pug',
            type: 'babel'
        })
        // .transform(babelify)
        // .transform(debowerify)
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(`${DEST}/js`));
});

gulp.task('js', gulp.parallel('browserify', 'copy-bower'));


// html
gulp.task('pug', () => {
    const locals = readConfig(`${CONFIG}/meta.json`);

    return gulp.src(`${SRC}/pug/*.pug`)
        .pipe(pug({
            locals: locals,
            pretty: true
        }))
        .pipe(gulp.dest(`${DEST}`));
});

gulp.task('html', gulp.series('pug'));


// riot
gulp.task('riot', () => {
    return gulp.src(`${SRC}/tag/*.pug`)
        .pipe(riot({
            compact: true,
            template: 'pug',
            type: 'es6'
        }))
        .pipe(concat('tag.js'))
        .pipe(gulp.dest(`${DEST}/js/`));
});


// serve
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: DEST
        }
    });

    watch([`${SRC}/scss/**/*.scss`], gulp.series('sass', browserSync.reload));
    watch([`${SRC}/js/**/*.{js|tag}`], gulp.series('browserify', browserSync.reload));
    watch([
        `${SRC}/pug/**/*.pug`,
        `${SRC}/config/meta.json`
    ], gulp.series('pug', browserSync.reload));
});

gulp.task('serve', gulp.series('browser-sync'));


// default
gulp.task('build', gulp.parallel('css', 'js', 'html'));
gulp.task('default', gulp.series('build', 'serve'));
