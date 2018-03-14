const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const merge = require('gulp-merge-json');
const paths = {
    dictionary: 'client/**/i18n/'
};
const dictionaryDist = 'client/assets/i18n';
const langList = ['fa', 'en'];

gulp.task('dic', function () {
    var command = gulp;
    langList.forEach(function (lang) {
        var categoryList = [];
        command.src(paths.dictionary + lang + '.json')
            .pipe(merge(lang + '.json', function (parsedJson, file) {
                if (parsedJson) {
                    for (var i in parsedJson) {
                        if (categoryList.indexOf(i) != -1) {
                            console.log('Duplicate dictionary category: ' + i);
                            return {};
                        }
                        categoryList.push(i);
                    }
                }
                return parsedJson;
            }))
            .pipe(gulp.dest(dictionaryDist));
    });
    return command;
});
// Rerun the task when a file changes
gulp.task('dicW1', function () {
    gulp.watch(paths.dictionary + '*', ['dic']);
});
gulp.task('dicW2', function () {
    return watch(paths.dictionary + '*.*', batch(function (events, done) {
        gulp.start(['dic','dicW1'], done);
    }));
});
