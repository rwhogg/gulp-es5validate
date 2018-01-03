'use strict';
const through = require('through2');
const acorn = require('acorn');
const PluginError = require('plugin-error');

module.exports = () => {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-es5validate', 'Streaming not supported'));
			return;
		}

		let errors;

		try {
			errors = acorn.parse(file.contents.toString(), {ecmaVersion: 5}).errors;
		} catch (err) {
			this.emit('error', new PluginError('gulp-es5validate', err, {fileName: file.path}));
		}

		if (errors && errors.length > 0) {
			this.emit('error', new PluginError('gulp-es5validate', '\n' + errors.join('\n'), {
				fileName: file.path,
				showStack: false
			}));
		}

		cb(null, file);
	});
};
