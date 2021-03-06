var Roles = require('../enums/Roles');

/**
 * isAdmin
 *
 * @module      :: Policy
 * @description :: Policy to allow access to an authenticated user with an admin role
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 *
 */
module.exports = function isAdmin (req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.session.authenticated && (req.user.role === Roles.admin || req.user.role === Roles.siteAdmin))  {
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};