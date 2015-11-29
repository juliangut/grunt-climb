[![Latest Version](https://img.shields.io/npm/v/grunt-climb.svg?style=flat-square)](https://npmjs.org/package/grunt-climb)
[![License](https://img.shields.io/github/license/juliangut/grunt-climb.svg?style=flat-square)](https://github.com/juliangut/grunt-climb/blob/master/LICENSE)

[![Total Downloads](https://img.shields.io/npm/dt/grunt-climb.svg?style=flat-square)](https://npmjs.org/package/grunt-climb)

# climb Grunt plugin

> Grunt plugin for running [climb](https://github.com/vinkla/climb)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-climb --save-dev
```

Make sure you have climb installed

```shell
composer require vinkla/climb
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-climb');
```

## The "climb" task

### Overview
In your project's Gruntfile, add a section named `climb` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  climb: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.bin
Type: `String`
Default value: `'climb'`

Climb executable binary.

In case you do not provide climb binary path you need to have it on PATH environment variable otherwise plugin will raise an error

#### options.output
Type: `String`
Default value: `undefined`

Output path to save climb report.

Output file name will be climb-output

#### directory
Type: `String`
Default value: `undefined`

Path to directory containing composer files (composer.json and composer.lock).

### Usage Example

```js
grunt.initConfig({
  climb: {
    all {
      options: {
        bin: 'vendor/bin/climb'
      },
      directory: './test'
    }
  },
});
```

## Contributing

Found a bug or have a feature request? [Please open a new issue](https://github.com/juliangut/grunt-climb/issues). Have a look at existing issues before.

See file [CONTRIBUTING.md](https://github.com/juliangut/grunt-climb/blob/master/CONTRIBUTING.md)

## License

See file [LICENSE](https://github.com/juliangut/grunt-climb/blob/master/LICENSE) included with the source code for a copy of the license terms.
