'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var cssLonghand = require('./');

it('should ', function (cb) {
	var stream = cssLonghand();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString(),'.classname {\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 0;\n  margin-left: 0; }');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		base: __dirname,
		path: __dirname + '/file.css',
		contents: new Buffer('.classname { margin: 0; }')
	}));

	stream.end();
});
