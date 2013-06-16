# grunt-includejs

> include.js is a node preprocessor for including one JavaScript files into another by "@include" operator. It's a fork of wepp module.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-includejs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-includejs');
```

## The "includejs" task

### Overview
In your project's Gruntfile, add a section named `includejs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  includejs: {
    your_target: {
      'dest_file.js': 'src_file.js'
    },
  },
})
```

## Release History
*16.06.2013*: 0.1.0
