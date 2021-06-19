/**
 * auth
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = (req, res, next) => {
  const { user } = req;
  
  if (user) {
    next();
  } else {
    return res.status(401).json({
      success: 0,
      data: null,
      message: 'You are not logged in!'
    });
  }
};
