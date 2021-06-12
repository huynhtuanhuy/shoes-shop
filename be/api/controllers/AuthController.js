/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const emailService = require('../services/EmailService');

module.exports = {
	checkAuth: async (req, res) => {
		if (req.session.userInfo && req.session.userInfo.username) {
			const { username } = req.session.userInfo;
			const userFound = await User.findOne({ username });
			if (!userFound || !userFound.id) {
				return res.status(404).json({
					success: 0,
					data: null,
					message: 'Tài khoản này không tồn tại.'
				});
			}

			if (userFound.memberType === 'banned') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Tài khoản của bạn đã bị khóa!'
				});
			}

			if (userFound.memberType === 'unverified') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Bạn cần xác thực địa chỉ email để được truy cập vào hệ thống!'
				});
			}

			res.json({
				success: 1,
				data: {
					...req.session.userInfo,
					memberType: userFound.memberType,
					avatar: userFound.avatar,
					about: userFound.about,
					phone: userFound.phone,
				},
				message: '',
			});
		} else {
			res.status(401).json({
				success: 0,
				data: null,
				message: 'Bạn cần đăng nhập để truy cập hệ thống'
			});
		}
	},
	updateProfile: async (req, res) => {
		const { fullname, phone, avatar, about } = req.body;

		if (req.session.userInfo && req.session.userInfo.username) {
			const { username } = req.session.userInfo;
			const userFound = await User.findOne({ username });
			if (!userFound || !userFound.id) {
				return res.status(404).json({
					success: 0,
					data: null,
					message: 'Tài khoản này không tồn tại.'
				});
			}

			if (userFound.memberType === 'banned') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Tài khoản của bạn đã bị khóa!'
				});
			}

			if (userFound.memberType === 'unverified') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Bạn cần xác thực địa chỉ email để được truy cập vào hệ thống!'
				});
			}

			await User.updateOne({ id: userFound.id })
				.set({
					fullname: fullname || userFound.fullname,
					avatar: avatar || userFound.avatar,
					phone: phone,
					about: about,
				});

			res.json({
				success: 1,
				data: null,
				message: '',
			});
		} else {
			res.status(401).json({
				success: 0,
				data: null,
				message: 'Bạn cần đăng nhập để truy cập hệ thống'
			});
		}
	},
	verifyEmail: async (req, res) => {
		try {
			const { code } = req.body;

			if (!code) {
				return res.status(400).json({
					success: 0,
					data: null,
					message: 'Thiếu mã xác nhận.'
				});
			}

			const userFound = await User.findOne({ verifyCode: code });

			if (!userFound || !userFound.id) {
				return res.status(400).json({
					success: 0,
					data: null,
					message: 'Mã xác nhận sai, vui lòng thử lại.',
				});
			}

			if (userFound.memberType === 'unverified') {
				const now = new Date();
				const userUpdated = await User.updateOne({ id: userFound.id })
					.set({
						memberType: 'trial',
						expiredDate: new Date(now.setDate(now.getDate() + 15)).toISOString(),
						verifyCode: '',
					});

				const affiliate = await Affiliate.findOne({ customer: userFound.id });

				if (affiliate && affiliate.id && affiliate.status == 'not-verified') {
					await Affiliate.updateOne({ id: affiliate.id }).set({ status: 'not-bought' });
				}

				req.session.userInfo = { email: userUpdated.email, name: userUpdated.name, id: userUpdated.id };
				return res.json({
					success: 1,
					data: {
						...req.session.userInfo,
						memberType: userUpdated.memberType,
						expiredDate: userUpdated.expiredDate,
					},
					message: '',
				});
			} else {
				return res.status(400).json({
					success: 0,
					data: null,
					message: 'Tài khoản này đã được xác thực!'
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: 0,
				data: null,
				message: 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
			});
		}
	},
	signIn: async (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({
				success: 0,
				data: null,
				message: 'Thiếu tài khoản hoặc mật khẩu.'
			});
		}

		try {
			const userFound = await User.findOne({ username });

			if (!userFound || !userFound.id) {
				return res.status(404).json({
					success: 0,
					data: null,
					message: 'Tài khoản này không tồn tại!'
				});
			}

			if (userFound.memberType === 'banned') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Tài khoản của bạn đã bị khóa!'
				});
			}

			if (userFound.memberType === 'unverified') {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Bạn cần xác thực địa chỉ email để được truy cập vào hệ thống!'
				});
			}

			if (bcrypt.compareSync(password, userFound.password)) {
				req.session.userInfo = {
					username,
					email: userFound.email,
					fullname: userFound.fullname,
					id: userFound.id
				};
				return res.json({
					success: 1,
					data: {
						...req.session.userInfo,
						memberType: userFound.memberType,
						avatar: userFound.avatar,
						about: userFound.about,
						phone: userFound.phone,
					},
					message: '',
				});
			} else {
				return res.status(401).json({
					success: 0,
					data: null,
					message: 'Sai mật khẩu!'
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: 0,
				data: null,
				message: 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
			});
		}
	},
	signUp: async (req, res) => {
		const { email, password, fullname, username } = req.body;

		if (!email || !password || !username || !fullname) {
			return res.status(400).json({
				success: 0,
				data: null,
				message: 'Cần điền đầy đủ thông tin.'
			});
		}

		try {
			const hashPassword = bcrypt.hashSync(password, 12);
			const now = new Date();

			const userFoundByUsername = await User.findOne({ username });

			if (userFoundByUsername && userFoundByUsername.id) {
				return res.status(400).json({
					success: 0,
					data: null,
					message: 'Tài khoản này đã tồn tại!'
				});
			}

			const userFoundByEmail = await User.findOne({ email });

			if (userFoundByEmail && userFoundByEmail.id) {
				return res.status(400).json({
					success: 0,
					data: null,
					message: 'Địa chỉ email này đã được dùng để đăng ký một tài khoản khác!'
				});
			}

			const user = await User.create({
				email,
				username,
				password: hashPassword,
				fullname,
			}).fetch();

			return res.json({
				success: 1,
				data: {
					username,
					email,
					fullname,
					memberType: user.memberType,
				},
				message: '',
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: 0,
				data: null,
				message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
			});
		}
	},
	signOut: (req, res) => {
		if (req.session.userInfo) {
			req.session.userInfo = undefined;
			req.session.destroy();
		}

		res.json({
			success: 1,
			data: null,
			message: '',
		})
	},
	recoverAccount: async (req, res) => {
		const { email } = req.body;

		if (!email) {
			return res.status(400).json({
				success: 0,
				data: null,
				message: 'Cần điền đầy đủ thông tin.'
			});
		}

		try {
			const userFound = await User.findOne({ email });

			if (!userFound || !userFound.id) {
				return res.status(404).json({
					success: 0,
					data: null,
					message: 'Không có tài khoản nào được đăng ký với địa chỉ email này.'
				});
			}

			const passwordNew = randomstring.generate({
				length: 8,
			})

			const hashPassword = bcrypt.hashSync(passwordNew, 12);

			await User.updateOne({ id: userFound.id })
				.set({
					password: hashPassword,
				});

			const mailBody = fs.readFileSync(path.resolve(__dirname, '../mailTemplates/reset_mat_khau_thanh_cong.html'), 'utf-8')

			await emailService.sendMail(
				email,
				"Yêu cầu lấy lại mật khẩu thành công",
				mailBody.replace('%%fullname%%', userFound.name || email)
					.replace('%%fullname%%', userFound.name || email)
					.replace('%%fullname%%', userFound.name || email)
					.replace('%%fullname%%', userFound.name || email)
					.replace('%%passwordNew%%', passwordNew),
			);

			res.json({
				success: 1,
				data: null,
				message: '',
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: 0,
				data: null,
				message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
			});
		}
	},
	changePassword: async (req, res) => {
		const { new_password, old_password } = req.body;

		if (!old_password || !new_password) {
			return res.status(400).json({
				success: 0,
				data: null,
				message: 'Cần điền đầy đủ thông tin.'
			});
		}

		try {
			if (req.session.userInfo && req.session.userInfo.username) {
				const { username } = req.session.userInfo;
				const userFound = await User.findOne({ username });

				if (!userFound || !userFound.id) {
					return res.status(401).json({
						success: 0,
						data: null,
						message: 'Bạn cần đăng nhập để truy cập chức năng này.'
					});
				}

				if (!bcrypt.compareSync(old_password, userFound.password)) {
					return res.status(400).json({
						success: 0,
						data: null,
						message: 'Mật khẩu hiện tại không đúng.'
					});
				}

				const hashPassword = bcrypt.hashSync(new_password, 12);

				await User.updateOne({ id: userFound.id })
					.set({
						password: hashPassword,
					});

				res.json({
					success: 1,
					data: null,
					message: '',
				});
			} else {
				res.status(401).json({
					success: 0,
					data: null,
					message: 'Bạn cần đăng nhập để truy cập hệ thống'
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: 0,
				data: null,
				message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
			});
		}
	},
};

