var gulp = require('gulp');
var lr = require('tiny-lr');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var reload = require('gulp-livereload');
require("coffee-script");

server = lr();

gulp.task('templates', function(){
	gulp.src("./client/templates/**/*.jade")
	.pipe(jade())
	.pipe(gulp.dest("./public/templates"))
	.pipe(reload(server));

});

gulp.task('scripts', function(){
	gulp.src("./client/js/**/*.coffee")
		.pipe(coffee())
		.pipe(gulp.dest("./public/js"))
		.pipe(reload(server));
	gulp.src("./client/js/**/*.js")
		.pipe(gulp.dest("./public/js"));

});

gulp.task('copy', function(){
	gulp.src("./client/css/**/*.css")
		.pipe(gulp.dest("./public/css"))
		.pipe(reload(server));
	gulp.src("./client/images/**")
		.pipe(gulp.dest("./public/images"))
		.pipe(reload(server));
	gulp.src("./client/*.html")
		.pipe(gulp.dest("./public"))
		.pipe(reload(server));
	
});

gulp.task('watch', function(){
	server.listen(35729, function (err) {
    if (err) return console.log(err);

		gulp.watch('./client/js/**', function(e){
			gulp.run('scripts');
		});
		gulp.watch('./client/templates/**', function(e){
			gulp.run('templates');
		});
		gulp.watch('./client/*.html', function(e){
			gulp.run('copy');
		});
		gulp.watch('./client/css/**', function(e){
			gulp.run('copy');
		});
	
	});
});

gulp.task('default', function(){
	gulp.run('templates', 'scripts', 'copy', 'watch');
	require("./start");
	
});