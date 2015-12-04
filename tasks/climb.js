/*
 * grunt-climb
 * https://github.com/juliangut/grunt-climb
 *
 * Copyright (c) 2015 Julián Gutiérrez (juliangut@gmail.com)
 * Licensed under the BSD-3-Clause license.
 */

'use strict';

var path = require('path');
var exec = require('child_process').exec;

module.exports = function(grunt) {
  var flags = {
    outdated: 'outdated',
    upgradable: 'upgradable'
  };

  grunt.registerMultiTask('climb', 'Grunt climb tool runner', function() {
    var cmd = null,
      done = null,
      config = this.options({
        bin: 'climb'
      });

    if (this.data.directory !== undefined && !grunt.file.isDir(this.data.directory)) {
      grunt.verbose.error();
      grunt.fail.warn('Path "' + this.data.directory + '" should be a directory.');
    }

    if (config.output !== undefined) {
      config.output = path.normalize(config.output).replace(/\\$/, '');

      if (!grunt.file.exists(config.output)) {
        grunt.verbose.error();
        grunt.fail.warn('Output directory "' + config.output + '" not found.');
      }

      if (!grunt.file.isPathInCwd(config.output)) {
        grunt.verbose.error();
        grunt.fail.warn('Cannot output to a directory outside the current working directory.');
      }
    }

    cmd = path.normalize(config.bin) + ' outdated';

    if (this.data.directory !== undefined) {
      cmd += ' --directory=' + this.data.directory;
    }

    for (var flag in flags) {
      if (config[flag] !== undefined && config[flag] !== false) {
        cmd += ' --' + flags[flag];
      }
    }

    grunt.log.writeln('Starting climb (target: ' + this.target.cyan + ')');
    grunt.verbose.writeln('Execute: ' + cmd);

    done = this.async();

    return exec(cmd, function(err, stdout) {
      if (err) {
        grunt.fatal(err);
      }

      if (config.output === undefined) {
        grunt.log.writeln(stdout);
      } else {
        var outputFile = config.output + '/climb-output';

        grunt.file.write(outputFile, stdout);
        grunt.log.writeln('Generating output file ' + outputFile);
      }

      return done();
    });
  });
};
