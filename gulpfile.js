const gulp = require("gulp")
const jsValidate = require(".")

gulp.task("default", () => {
    const files = ["valid-es6.js", "invalid-es6.js", "valid-es5.js", "invalid-es5.js"]
    return Promise.all(
        files.map(file => {
        return gulp.src(file)
            .pipe(jsValidate())
            .on("error", error => {
                console.error("Message: " + error.message)
                console.error("Location: " + error.fileName)
            })
        })
    )
})
