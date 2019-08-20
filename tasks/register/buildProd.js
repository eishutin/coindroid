/**
<<<<<<< HEAD
 * `buildProd`
=======
 * `tasks/register/buildProd.js`
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist will be executed instead of `build` if you
 * run `sails www` in a production environment, e.g.:
 * `NODE_ENV=production sails www`
 *
<<<<<<< HEAD
 * This generates a folder containing your compiled (and usually minified)
 * assets.  The most common use case for this is bundling up files to
 * deploy to a CDN.
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/build-prod-js
=======
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/build-prod.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('buildProd', [
<<<<<<< HEAD
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'linkAssetsBuildProd',
    'clean:build',
    'copy:build'
=======
    'polyfill:prod', //« Remove this to skip transpilation in production (not recommended)
    'compileAssets',
    'babel',         //« Remove this to skip transpilation in production (not recommended)
    'concat',
    'uglify',
    'cssmin',
    'hash',//« Cache-busting
    'copy:beforeLinkBuildProd',//« For prettier URLs after cache-busting
    'linkAssetsBuildProd',
    'clean:build',
    'copy:build',
    'clean:afterBuildProd'
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  ]);
};

