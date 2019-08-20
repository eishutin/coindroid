/**
<<<<<<< HEAD
 * `syncAssets`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `watch` task (`tasks/config/watch.js`).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/sync-assets-js
=======
 * `tasks/register/syncAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/sync-assets.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
<<<<<<< HEAD
    'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
=======
    'less:dev',
    'sync:dev',
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  ]);
};
