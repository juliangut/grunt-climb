/*
 * grunt-climb
 * https://github.com/juliangut/grunt-climb
 *
 * Copyright (c) 2015 Julián Gutiérrez (juliangut@gmail.com)
 * Licensed under the BSD-3-Clasue license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js'
      ]
    },

    clean: {
      tests: ['tmp']
    },

    mkdir: {
      tests: {
        options: {
          create: ['tmp']
        }
      }
    },

    climb: {
      options: {
        bin: 'vendor/bin/climb',
        output: 'test'
      },
      defaults: {
        directory: 'test/'
      },
      no_outdated: {
        options: {
          outdated: true
        },
        directory: 'test/'
      },
      no_upgradable: {
        options: {
          upgradable: true
        },
        directory: 'test/'
      }
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['jshint', 'clean', 'mkdir', 'climb']);
};
