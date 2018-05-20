var gulp = require("gulp"),
postcss = require("gulp-postcss"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins");

gulp.task("styles", function() {
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssImport, mixins, nested, cssVars]))
  .on("error", function(errorInfo) {
  	console.log(errorInfo.toString());
  	this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});

