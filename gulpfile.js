var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var uglify = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');


// compile all your Sass
gulp.task('sass', function (){
	gulp.src(['./scss/*.scss'])
		.pipe(sass({
			includePaths: ['./scss']
		}))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('./'));
});



gulp.task('default', function(){

// watch me getting Sassy
gulp.watch("./scss/**/*.scss", function(event){
	gulp.run('sass');
});

});