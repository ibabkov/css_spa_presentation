const { task, src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
var rename = require("gulp-rename");

task('default', async function () {
  return src('./src/app.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/components/'
    }))
    .pipe(rename('index.html'))
    .pipe(dest('./'));
});