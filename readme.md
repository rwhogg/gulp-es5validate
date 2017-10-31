# gulp-es5validate [![Build Status](https://travis-ci.org/rwhogg/gulp-es5validate.svg?branch=master)](https://travis-ci.org/rwhogg/gulp-es5validate)

> Validate Ecmascript 5 code and report possible syntax errors

The earlier you find syntax errors, the earlier you can fix them.


## Install

```
$ npm install --save-dev gulp-es5validate
```


## Usage

```js
const gulp = require('gulp');
const jsValidate = require('gulp-es5validate');

gulp.task('default', () =>
	gulp.src('app.js')
		.pipe(jsValidate())
);
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
Minor changes © [Bob W. Hogg](https://github.com/rwhogg) released under same license
