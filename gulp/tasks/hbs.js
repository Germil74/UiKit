//require('../../src/views/variables/variables')

module.exports = function() {
    $.gulp.task('hbs', () => {
        const conf = JSON.parse($.fs.readFileSync('./data/conf.json', 'utf8'))
        const templateData = {
            nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
            content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8'))
        }
        const   options = {
            partialsDirectory : ['./src/views/layouts/head', './src/views/layouts/footer', './src/views/page', './src/views/components', './src/views/layouts']
        }
        require('../../src/views/variables/variables.js')()
        return $.gulp.src(`./src/views/index.hbs`)
            .pipe($.gulpHandlebars(templateData, options))
           .pipe($.gp.rename('index.html'))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'handlebars',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./public/'))
            .on('end', $.browserSync.reload);
    })
}
