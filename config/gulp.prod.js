'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer'); // 处理css中浏览器兼容的前缀 

var rename = require('gulp-rename'); //重命名  
var cssnano = require('gulp-cssnano'); // css的层级压缩合并
var uglify = require('gulp-uglify'); //js压缩  

var Config = require('./gulp.config.js');


module.exports =function(){
    /** 
     * HTML处理 
     */
    gulp.task('html', function () {
        return gulp.src(Config.html.src)
        .pipe(gulp.dest(Config.html.dist));
    });


    gulp.task('font', function () {
        return gulp.src(Config.font.src)
            .pipe(gulp.dest(Config.font.dist));
    });
    /** 
     * sass样式处理 
     */
    gulp.task('sass', function () {
        return gulp.src(Config.sass.src)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers:['last 2 version'],//浏览器版本 
         }))
        .pipe(cssnano())
        .pipe(gulp.dest(Config.sass.dist))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(Config.sass.dist));
    });
    /** 
     * js处理 
     */
    gulp.task('js', function () {
        return gulp.src(Config.js.src)
        .pipe(uglify())
        .pipe(gulp.dest(Config.js.dist))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(Config.js.dist));
    });
    gulp.task('prod', ['html', 'js','sass','font']);
}
