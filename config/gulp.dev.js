'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var Config = require('./gulp.config.js');



module.exports = function () {
    /** 
     * HTML处理 
     */
    gulp.task('dev:html', function () {
        return gulp.src(Config.html.src)
            .pipe(gulp.dest(Config.html.tmp))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
    /** 
     * CSS样式处理 
     */
    gulp.task('dev:css', function () {
        return gulp.src(Config.css.src)
            .pipe(gulp.dest(Config.css.tmp))
            .pipe(browserSync.reload({
                stream: true
            }));
    });

    /** 
     * sass样式处理 
     */
    gulp.task('dev:sass', function () {
        return gulp.src(Config.sass.src)
            .pipe(plumber())
            .pipe(sass({
                outputStyle: 'expanded'
            }))
            .pipe(autoprefixer('last 2 version'))
            .pipe(gulp.dest(Config.sass.tmp))
            .pipe(browserSync.reload({
                stream: true
            }));
    });
    /** 
     * js处理 
     */
    gulp.task('dev:js', function () {
        return gulp.src(Config.js.src)
            .pipe(gulp.dest(Config.js.tmp))
            .pipe(browserSync.reload({
                stream: true
            }));
    });


    gulp.task('dev', ['dev:html','dev:sass', 'dev:js'], function () {
        browserSync.init({
            server: {
                baseDir: Config.tmp
            },
            port: 3000,
            notify: false, //浏览器右上方弹窗小提示
            open: false // 自动打开浏览器
        });
        // 启动监视
        gulp.watch(Config.html.src, ['dev:html']);
        gulp.watch(Config.sass.src, ['dev:sass']);
        gulp.watch(Config.js.src, ['dev:js']);
    });
}