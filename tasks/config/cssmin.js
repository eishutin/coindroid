/**
<<<<<<< HEAD
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minify the intermediate concatenated CSS stylesheet which was
 * prepared by the `concat` task at `.tmp/public/concat/production.css`.
 *
=======
 * `tasks/config/cssmin`
 *
 * ---------------------------------------------------------------
 *
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 * Together with the `concat` task, this is the final step that minifies
 * all CSS files from `assets/styles/` (and potentially your LESS importer
 * file from `assets/styles/importer.less`)
 *
<<<<<<< HEAD
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-cssmin
=======
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/cssmin.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {

  grunt.config.set('cssmin', {
    dist: {
      src: ['.tmp/public/concat/production.css'],
      dest: '.tmp/public/min/production.min.css'
    }
  });

<<<<<<< HEAD
  grunt.loadNpmTasks('grunt-contrib-cssmin');
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
  //    $ npm install grunt-contrib-cssmin --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
};
