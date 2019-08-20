/**
 * Internationalization / Localization Settings
 * (sails.config.i18n)
 *
 * If your app will touch people from all over the world, i18n (or internationalization)
 * may be an important part of your international strategy.
 *
<<<<<<< HEAD
 *
 * For more information on i18n in Sails, check out:
 * http://sailsjs.org/#!/documentation/concepts/Internationalization
 *
 * For a complete list of i18n options, see:
 * https://github.com/mashpie/i18n-node#list-of-configuration-options
 *
 *
=======
 * For a complete list of options for Sails' built-in i18n support, see:
 * https://sailsjs.com/config/i-18-n
 *
 * For more info on i18n in Sails in general, check out:
 * https://sailsjs.com/docs/concepts/internationalization
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
 */

module.exports.i18n = {

  /***************************************************************************
  *                                                                          *
  * Which locales are supported?                                             *
  *                                                                          *
  ***************************************************************************/

<<<<<<< HEAD
  // locales: ['en', 'es', 'fr', 'de'],
=======
  locales: ['en', 'es', 'fr', 'de'],
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804

  /****************************************************************************
  *                                                                           *
  * What is the default locale for the site? Note that this setting will be   *
  * overridden for any request that sends an "Accept-Language" header (i.e.   *
  * most browsers), but it's still useful if you need to localize the         *
  * response for requests made by non-browser clients (e.g. cURL).            *
  *                                                                           *
  ****************************************************************************/

  // defaultLocale: 'en',

  /****************************************************************************
  *                                                                           *
<<<<<<< HEAD
  * Automatically add new keys to locale (translation) files when they are    *
  * encountered during a request?                                             *
  *                                                                           *
  ****************************************************************************/

  // updateFiles: false,

  /****************************************************************************
  *                                                                           *
=======
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  * Path (relative to app root) of directory to store locale (translation)    *
  * files in.                                                                 *
  *                                                                           *
  ****************************************************************************/

<<<<<<< HEAD
  // localesDirectory: '/config/locales'
=======
  // localesDirectory: 'config/locales'
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804

};
