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
  grunt.registerMultiTask('climb', 'Grunt climb tool runner', function() {
    var cmd = null;
    var done = null;

    var config = this.options({
      bin: 'climb'
    });

    cmd = path.normalize(config.bin) + ' outdated';

    grunt.log.writeln('Starting climb (target: ' + this.target.cyan + ')');
    grunt.verbose.writeln('Execute: ' + cmd);

    done = this.async();

    return exec(cmd, function(err, stdout) {
      if (err) {
        grunt.fatal(err);
      }

      grunt.log.writeln(stdout);

      return done();
    });
  });
};