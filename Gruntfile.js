module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js',
        'src/eu-cookie-alert.js'
      ],
      options: { jshintrc: true }
    },
    fixmyjs: {
      'src/eu-cookie-alert.js': ['src/eu-cookie-alert.js'],
      'Gruntfile.js': ['Gruntfile.js'],
      'test/test.js': ['test/test.js'],
      options: { config: '.jshintrc' }
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
        sourceMap: true,
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */'
      },
      build: {
        src: ['src/eu-cookie-alert.js'],
        dest: 'dist/eu-cookie-alert.min.js'
      }
    },
    qunit: { all: ['test/*.html'] },
    blanket_qunit: {
      all: {
        options: {
          urls: ['test/test.html?coverage&gruntReport'],
          threshold: 80
        }
      }
    },
    watch: {
      js: {
        files: 'eu-cookie-alert.js',
        tasks: [
          'fixmyjs',
          'jshint',
          'uglify'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-fixmyjs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-blanket-qunit');
  grunt.registerTask('test', [
    'qunit',
    'blanket_qunit'
  ]);
  grunt.registerTask('default', [
    'fixmyjs',
    'jshint',
    'uglify'
  ]);
};