/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',
    //   'checkAuth',
    //   'bodyParser',
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],

    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

    // checkAuth: async (req, res, next) => {
    //   if (req.session && req.session.userInfo && req.session.userInfo.id) {
    //     const userFound = await User.findOne({ id: req.session.userInfo.id });
    //     console.log(userFound)
    //     if (!userFound || !userFound.id) {
    //       return res.status(404).json({
    //         success: 0,
    //         data: null,
    //         message: 'Tài khoản này không tồn tại.'
    //       });
    //     } else if (userFound.role === 'unverified') {
    //       return res.status(401).json({
    //           success: 0,
    //           data: null,
    //           message: 'Bạn cần xác thực địa chỉ email để được truy cập vào hệ thống!'
    //       });
    //     } else if (userFound.role !== 'unverified') {
    //       req.user = userFound;
    //       if (userFound.role === 'admin' || new Date(userFound.expiredDate).valueOf() > new Date().valueOf()) {
    //         return next();
    //       } else {
    //         return res.status(401).json({
    //             success: 0,
    //             data: null,
    //             message: 'Tài khoản của bạn đã hết hạn, vui lòng gia hạn để tiếp tục sử dụng dịch vụ!'
    //         });
    //       }
    //     }
    //   };

		// 	res.status(401).json({
		// 		success: 0,
		// 		data: null,
		// 		message: 'You are not logged in!'
		// 	});
    // }
  },
};
