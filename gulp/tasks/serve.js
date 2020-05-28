module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: {
                baseDir: `${$.path.dist}`,
                serveStaticOptions: {
                    extensions: ["html"]
                }
            },
            port: 4000,
            notify: true
        });
    });

};
