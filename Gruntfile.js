'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'dist/iso-4217-currency-codes-angular.min.js': ['src/iso-4217-currency-codes-angular.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'src/{,*/}*.js'
      ]
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);

};
