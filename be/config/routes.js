/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const path = require('path');
const fs = require('fs');
const fileType = require('file-type');

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /api/auth/check': 'AuthController.checkAuth',
  'POST /api/auth/signin': 'AuthController.signIn',
  'POST /api/auth/signup': 'AuthController.signUp',
  'GET /api/auth/signout': 'AuthController.signOut',
  'POST /api/auth/profile': 'AuthController.updateProfile',
  'POST /api/auth/change-password': 'AuthController.changePassword',

  'GET /api/categories/options': 'CategoriesController.options',

  'GET /api/users/options': 'UsersController.options',

  'GET /api/dashboards': 'DashboardController.dashboardInfo',

  'POST /api/upload': 'FileController.upload',

  '/images/*': (req, res) => {
    if (req.params && req.params[0]) {
      const urlFile = path.resolve(__dirname, '../assets/images', req.params[0]);
      console.log(urlFile)
      if (fs.existsSync(urlFile)) {
        const image = fs.readFileSync(urlFile);
        res.writeHead(200, { 'Content-Type': fileType(image).mime });
        res.end(image, 'binary');
      } else res.status(404).send('File not found!');
    } else res.status(400).send();
  },
};
