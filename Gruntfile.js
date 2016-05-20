/*
 * grunt-climb
 * https://github.com/juliangut/grunt-climb
 *
 * Copyright (c) 2015 Julián Gutiérrez (juliangut@gmail.com)
 * Licensed under the BSD-3-Clasue license.
 */

'use strict';

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.loadTasks('tasks');

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

    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true
      },
      application: [
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
        bin: 'vendor/bin/climb'
      },
      only_outdated: {
        options: {
          exclude: 'phpunit/phpunit',
          onlyOutdated: true
        },
        directory: 'test'
      },
      full: {
        options: {
          output: 'tmp'
        },
        directory: 'test'
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'jscs', 'clean', 'mkdir', 'climb']);
};
