/**
<<<<<<< HEAD
 * `linkAssetsBuildProd`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `buildProd` tasklist.
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/link-assets-build-prod-js
=======
 * `tasks/register/linkAssetsBuildProd.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/register/link-assets-build-prod.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssetsBuildProd', [
<<<<<<< HEAD
    'sails-linker:prodJsRelative',
    'sails-linker:prodStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:prodJsRelativeJade',
    'sails-linker:prodStylesRelativeJade',
    'sails-linker:devTplJade'
=======
    'sails-linker:prodJsBuild',
    'sails-linker:prodStylesBuild',
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  ]);
};
