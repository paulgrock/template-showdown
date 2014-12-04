'use strict';


module.exports = function browserify(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-browserify');

	// Options
	return {
		build: {
			files: {
				'public/js/app.min.js': [
                    'public/jsx/main.jsx',
                    'public/js/app.js'
                ],
			},
			options: {
                transform:  [ require('grunt-react').browserify ]
            }
		}
	};
};
