/**
<<<<<<< HEAD
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
=======
 * `tasks/config/concat`
 *
 * ---------------------------------------------------------------
 *
 * An intermediate step to generate monolithic files that can
 * then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/concat.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    js: {
      src: require('../pipeline').jsFilesToInject,
      dest: '.tmp/public/concat/production.js'
    },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/public/concat/production.css'
    }
  });

<<<<<<< HEAD
  grunt.loadNpmTasks('grunt-contrib-concat');
=======
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
  //    $ npm install grunt-contrib-concat --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
};
