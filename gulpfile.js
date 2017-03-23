var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');


// Tarea Build -------------------------------------------------------


gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});


/*
 Tarea Deploy ------------------------------------------------------

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
});
*/


gulp.task('deploy', function() {
      return gulp.src('./gh-pages/**/*')
        .pipe(ghPages());
    });


// Tarea Serve ---------------------------------------

gulp.task('serve', function() {
  return gulp.src('').pipe(shell(['gitbook serve --lrport 99990 --port 43210 ./txt gh-pages']));
});



// Tarea publicacion Iaas(se debe ejecuatar estando dentro del iaas) ---------------------------------------

gulp.task('gulp-ull', function(){
  return gulp.src('').pipe(shell([
  'git pull origin master'
  ]))
});


// Tarea por defecto -------------------------------------------------

gulp.task('default', ['build', 'deploy']);


/* Tarea publicacion gitbook ---------------------------------------

gulp.task('deploy-gitbook', function(){
  return gulp.src('').pipe(shell([
  'git add . '+
  'git commit -m "Despliegue a Gitbook" '+
  'git push gb master'
  ]))
  });
>>>>>>> 8a505d2f2466c4b63cac803db2e20683d0abaa48

*/




