const { task, src, dest, watch } = require('gulp');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');

const build = async function () {
    return src('./src/app.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/components/'
        }))
        .pipe(rename('index.html'))
        .pipe(dest('./'));
}

task('default', build);

task('watch', function(){
    watch('./src/**/*', build);
});
