/*
 * grunt-includejs
 * https://github.com/alright/grunt-includejs
 *
 * Copyright (c) 2013 Alright
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.registerMultiTask('includejs', 'include.js is a node preprocessor for including one JavaScript files into another by "@include" operator', function() {
		var done = this.async();
		var path = require('path');
		var options = this.options();

		grunt.util.async.eachSeries(this.files, function(file, next) {
			var destFile = path.normalize(file.dest);
			var srcFile = Array.isArray(file.src) ? file.src[0] : file.src;

			if ( ! grunt.file.exists(srcFile)) {
				// Warn on invalid source file (if nonull was set).
				grunt.log.warn('Source file "' + srcFile + '" not found.');
			}

			compile(srcFile, destFile, options);
			next();
		}, done);
	});

	var compile = function (srcFile, destFile, options) {
		var includejs = require('include.js');
		
		includejs.processFile(options, srcFile, destFile);
	};
};
