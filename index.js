'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var cssLonghand = require('css-longhand');

module.exports = function (options) {

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-css-longhand', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(cssLonghand(file.contents.toString()));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-css-longhand', err));
		}

		cb();
	});
};
