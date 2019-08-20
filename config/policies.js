/**
 * Policy Mappings
 * (sails.config.policies)
 *
<<<<<<< HEAD
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


=======
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
module.exports.policies = {

  /***************************************************************************
  *                                                                          *
<<<<<<< HEAD
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
=======
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
  *                                                                          *
  ***************************************************************************/

  // '*': true,

<<<<<<< HEAD
  /***************************************************************************
  *                                                                          *
  * Here's an example of mapping some policies to run before a controller    *
  * and its actions                                                          *
  *                                                                          *
  ***************************************************************************/
	// RabbitController: {

		// Apply the `false` policy as the default for all of RabbitController's actions
		// (`false` prevents all access, which ensures that nothing bad happens to our rabbits)
		// '*': false,

		// For the action `nurture`, apply the 'isRabbitMother' policy
		// (this overrides `false` above)
		// nurture	: 'isRabbitMother',

		// Apply the `isNiceToAnimals` AND `hasRabbitFood` policies
		// before letting any users feed our rabbits
		// feed : ['isNiceToAnimals', 'hasRabbitFood']
	// }
=======
>>>>>>> 9f1d51b9b32024e632185381661f3dc8be4ae804
};
