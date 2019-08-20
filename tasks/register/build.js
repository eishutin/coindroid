/**
<<<<<<< HEAD
 * `build`
=======
 * `tasks/register/build.js`
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist will be executed if you run `sails www` or
<<<<<<< HEAD
 * `grunt build` in a development environment.  It generates a
 * folder containing your compiled assets, e.g. for troubleshooting
 * issues with other Grunt plugins, bundling assets for an Electron
 * or PhoneGap app, or deploying your app's flat files to a CDN.
 *
 * Note that when running `sails www` in a production environment (with the
 * `NODE_ENV` environment variable set to 'production') the `buildProd` task
 * will be run instead of this one.
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/build-js
=======
 * `grunt build` in a development environment.
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/build.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('build', [
<<<<<<< HEAD
    'compileAssets',
=======
    // 'polyfill:dev', //« uncomment to ALSO transpile during development (for broader browser compat.)
    'compileAssets',
    // 'babel',        //« uncomment to ALSO transpile during development (for broader browser compat.)
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
    'linkAssetsBuild',
    'clean:build',
    'copy:build'
  ]);
};
