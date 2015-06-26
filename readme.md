# gulp-[css-longhand](http://npm.im/css-longhand) [![Build Status](https://travis-ci.org/hemanth/gulp-css-longhand.svg?branch=master)](https://travis-ci.org/hemanth/gulp-css-longhand)

> gulp plugin to expand CSS.


## Install

```
$ npm install --save-dev gulp-css-longhand
```


## Usage

```js
var gulp = require('gulp');
var cssLonghand = require('gulp-css-longhand');

gulp.task('default', function () {
	return gulp.src('src/shortHand.css')
		.pipe(cssLonghand())
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [hemanth.hm](http://h3manth.com)
