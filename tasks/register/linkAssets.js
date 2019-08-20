/**
<<<<<<< HEAD
 * `linkAssets`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `default` tasklist and the `watch` task
 * (but only if the `grunt-sails-linker` package is in use).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/link-assets-js
=======
 * `tasks/register/linkAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/link-assets.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssets', [
    'sails-linker:devJs',
    'sails-linker:devStyles',
<<<<<<< HEAD
    'sails-linker:devTpl',
    'sails-linker:devJsJade',
    'sails-linker:devStylesJade',
    'sails-linker:devTplJade'
=======
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  ]);
};
