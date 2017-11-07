var gulp           = require('gulp'),
	gutil          = require('gulp-util' ),
	sass           = require('gulp-sass'),
	browserSync    = require('browser-sync'),
	concat         = require('gulp-concat'),
	uglify         = require('gulp-uglify'),
	cleanCSS       = require('gulp-clean-css'),
	rename         = require('gulp-rename'),
	autoprefixer   = require('gulp-autoprefixer'),
	notify         = require("gulp-notify"),
	pug            = require('gulp-pug');

// Сервер и автообновление страницы Browsersync
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app',
			index: "index.html"
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

// Минификация пользовательских скриптов проекта и JS библиотек в один файл
gulp.task('js', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/js/common.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function buildHTML() {
	return gulp.src('app/pug/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('app'))
});

gulp.task('watch', ['pug', 'sass', 'js', 'browser-sync'], function() {
	gulp.watch('app/pug/**/*.pug', ['pug']);
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
	gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('default', ['watch']);
