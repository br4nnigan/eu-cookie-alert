module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: [
					'Gruntfile.js',
					'eu-cookie-alert.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		uglify: {
			options: {
				mangle: true,
				compress: {
					properties: true,
					sequences: true,
					drop_debugger: true,
					unsafe: false,
					dead_code: true,
					conditionals: true,
					comparisons: true,
					booleans: true,
					loops: true,
					unused: true,
					if_return: true,
					join_vars: true,
					warnings: true
				},
				sourceMap: 'eu-cookie-alert.js.map',

				banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n'
			},
			build: {
				src: [
						'jquery-cookie/jquery.cookie.js', 'eu-cookie-alert.js'
				],
				dest: 'eu-cookie-alert.min.js'
			}
		},
		watch: {
			js: {
				files: 'eu-cookie-alert.js',
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-update-submodules');

	grunt.registerTask('default', ['update_submodules', 'jshint', 'uglify']);
};