/**
 * ImagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const path = require('path');
const fs = require('fs');

module.exports = {
	upload: async (req, res) => {
		try {
			if (req.session.userInfo && req.session.userInfo.username) {
				const today = new Date();
				const year = today.getFullYear();
				const month = today.getMonth() + 1;

				if (!fs.existsSync(`${sails.config.appPath}/assets/images/${year}`)) {
					fs.mkdirSync(`${sails.config.appPath}/assets/images/${year}`);
				}
				if (!fs.existsSync(`${sails.config.appPath}/assets/images/${year}/${month}`)) {
					fs.mkdirSync(`${sails.config.appPath}/assets/images/${year}/${month}`);
				}

				var uploadFile = req.file('files');
				uploadFile.upload({ dirname: `${sails.config.appPath}/assets/images/${year}/${month}` }, function onUploadComplete(error, uploadedFiles) {
					if (error) {
						console.log(error);
						return res.status(500).json({
							success: 0,
							data: null,
							message: error && error.message || 'An error occurred. Please try again later!'
						});
					} else {
						try {
							const file = uploadedFiles[0];
							const filePath = path.parse(file.sourcePath || file.path || file.fd);

							res.json({
								success: true,
								data: {},
								message: '',
								uri: `images/${year}/${month}/${filePath.name}${filePath.ext}`,
							});
						} catch (error) {
							console.log(error);
							return res.status(500).json({
								success: 0,
								data: null,
								message: error && error.message || 'An error occurred. Please try again later!'
							});
						}
					}
				});
			} else {
				res.status(401).json({
					success: 0,
					data: null,
					message: 'You are not logged in!'
				});
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({
				success: 0,
				data: null,
				message: '',
			});
		}
	},
};
