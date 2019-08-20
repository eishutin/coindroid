/**
<<<<<<< HEAD
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
=======
 * `tasks/config/clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove generated files and folders.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/clean.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {

  grunt.config.set('clean', {
    dev: ['.tmp/public/**'],
<<<<<<< HEAD
    build: ['www']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
=======
    build: ['www'],
    afterBuildProd: [
      'www/concat',
      'www/min',
      'www/hash',
      'www/js',
      'www/styles',
      'www/templates',
      'www/dependencies'
    ]
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // This Grunt plugin is part of the default asset pipeline in Sails,
  // so it's already been automatically loaded for you at this point.
  //
  // Of course, you can always remove this Grunt plugin altogether by
  // deleting this file.  But check this out: you can also use your
  // _own_ custom version of this Grunt plugin.
  //
  // Here's how:
  //
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-clean --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
};
