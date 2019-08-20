/**
<<<<<<< HEAD
 * `prod`
=======
 * `tasks/register/prod.js`
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist will be executed instead of `default` when
 * your Sails app is lifted in a production environment (e.g. using
 * `NODE_ENV=production node app`).
 *
 * For more information see:
<<<<<<< HEAD
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/prod-js
=======
 *   https://sailsjs.com/anatomy/tasks/register/prod.js
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('prod', [
<<<<<<< HEAD
    'compileAssets',
=======
    'polyfill:prod', //« Remove this to skip transpilation in production (not recommended)
    'compileAssets',
    'babel',         //« Remove this to skip transpilation in production (not recommended)
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles',
<<<<<<< HEAD
    'sails-linker:devTpl',
    'sails-linker:prodJsJade',
    'sails-linker:prodStylesJade',
    'sails-linker:devTplJade'
  ]);
};
=======
  ]);
};

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
