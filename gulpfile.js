global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        dist: './docs'    //  'D:/host/OSPanel/domains/temp/public'    './public'
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    webpack: require("webpack-stream"),
    handlebars: require('handlebars'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    console.log(taskPath);
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('scss:dev', 'pug', 'build-js', 'svg', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('scss:build', 'pug', 'build-js', 'svg', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
