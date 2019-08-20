/**
<<<<<<< HEAD
 * `less`
=======
 * `tasks/config/less`
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 * ---------------------------------------------------------------
 *
 * Compile your LESS files into a CSS stylesheet.
 *
<<<<<<< HEAD
 * By default, only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-less
=======
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/less.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {

  grunt.config.set('less', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.less'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

<<<<<<< HEAD
  grunt.loadNpmTasks('grunt-contrib-less');
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
  //    $ npm install grunt-contrib-less --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-less');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
};
