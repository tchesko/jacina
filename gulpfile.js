var gulp = require('gulp'); 					//récupère le module gulp
var autoprefixer = require('gulp-autoprefixer'); //autopréfixe les propriétés css
var cssnano = require('gulp-cssnano'); 			//minifie le css
var rename = require("gulp-rename"); 			//renomme les fichiers (notamment extension .min.)
var sass = require('gulp-sass');				//sass

//à exécuter avec "gulp css"
gulp.task('css', function(){
	return gulp.src('src/scss/*.scss') //ATTENTION, dossier Scss !
			.pipe(sass({ outputStyle: 'expanded' }))
			.pipe(autoprefixer())
			.pipe(gulp.dest('./css'))		//sauvegarde dans css/ le fichier non minifié
			.pipe(rename({suffix: '.min'}))
			.pipe(cssnano())
			.pipe(gulp.dest('./css'))		//sauvegarde css/ le fichier minifié
});

//à exécuter avec "gulp watch"
//les changements aux fichiers sources seront détectés automatiquement
gulp.task('watch', function(){
	gulp.watch('src/scss/*.scss', ['css']);
});

//à exécuter avec "gulp" tout court
//les changements aux fichiers sources seront détectés automatiquement
gulp.task('default', ['css']);