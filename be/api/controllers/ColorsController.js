/**
 * ColorsController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    all: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const colorData = await Colors.find({});

                res.json({
                    success: 1,
                    data: colorData,
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
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    findOne: async (req, res) => {
        const { id } = req.params;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                };

                const colorFound = await Colors.findOne(query);

                if (!colorFound || !colorFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Màu không tồn tại!'
                    });
                }

                return res.json({
                    success: 1,
                    data: colorFound,
                    message: '',
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    data: null,
                    message: 'Bạn cần đăng nhập để truy cập hệ thống'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                };

                const colorFound = await Colors.findOne(query);

                if (!colorFound || !colorFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Màu không tồn tại!'
                    });
                }

                await Colors.destroyOne({ id });

                return res.json({
                    success: 1,
                    data: null,
                    message: '',
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    data: null,
                    message: 'Bạn cần đăng nhập để truy cập hệ thống'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { color_name, color_code } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                };

                const colorFound = await Colors.findOne(query);

                if (!colorFound || !colorFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Màu không tồn tại!'
                    });
                }

                await Colors.updateOne({ id })
                    .set({
                        color_name: color_name || colorFound.color_name,
                        color_code: color_code || colorFound.color_code,
                    });

                const colorUpdated = await Colors.findOne(query);

                return res.json({
                    success: 1,
                    data: colorUpdated,
                    message: '',
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    data: null,
                    message: 'Bạn cần đăng nhập để truy cập hệ thống'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    create: async (req, res) => {
        const { color_name, color_code } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const colorFound = await Colors.findOne({
                    where: {
                        or: [
                            { color_name },
                            { color_code }
                        ]
                    },
                });

                if (colorFound && colorFound.id) {
                    return res.status(400).json({
                        success: 0,
                        data: null,
                        message: 'Đã có màu vỡi mã này tồn tại tên này!'
                    });
                }

                const colorCreated = await Colors.create({
                    color_name,
                    color_code,
                }).fetch();

                return res.json({
                    success: 1,
                    data: colorCreated,
                    message: '',
                });
            } else {
                return res.status(401).json({
                    success: 0,
                    data: null,
                    message: 'Bạn cần đăng nhập để truy cập hệ thống'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
};
