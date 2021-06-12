/**
 * auth
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */
module.exports = (req, res, next) => {
  const { user } = req;
  
  if (user) {
    if (user.memberType === 'banned') {
      return res.status(401).json({
        success: 0,
        data: null,
        message: 'Tài khoản của bạn đã bị khóa!'
      });
    }

    if (user.memberType  === 'unverified') {
      return res.status(401).json({
        success: 0,
        data: null,
        message: 'Bạn cần xác thực địa chỉ email để được truy cập vào hệ thống!'
      });
    }

    if (user.memberType !== 'admin' && (!user.expiredDate || new Date(user.expiredDate).valueOf() <= new Date().valueOf())) {
      return res.status(401).json({
        success: 0,
        data: null,
        message: 'Tài khoản đã hết hạn, vui lòng gia hạn tài khoản để được tiếp tục truy cập.'
      });
    }

    next();
  } else {
    return res.status(401).json({
      success: 0,
      data: null,
      message: 'You are not logged in!'
    });
  }
};
