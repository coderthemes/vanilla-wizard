"use strict";

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    babel = require('gulp-babel');

var folder = {
    src: "src/", // source files
    dist: "dist/", // build files
};


// js
function js() {
    var out = folder.dist + "js/";

    return gulp.src(folder.src + "**/*.js")
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(gulp.dest(out));
}

// watch all changes
function watchFiles() {
    gulp.watch(folder.src + "**/*", gulp.series(js));
}

// watch all changes
gulp.task("watch", gulp.parallel(watchFiles));

// default task
gulp.task(
    "default",
    gulp.series(
        js,
        'watch'
    ),
    function (done) { done(); }
);

// build
gulp.task(
    "build",
    gulp.series(js)
);