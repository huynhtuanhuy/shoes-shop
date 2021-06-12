/**
 * OrdersController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    all: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const orderData = await Orders.find({
                    user_id: req.session.userInfo.id
                });

                res.json({
                    success: 1,
                    data: orderData,
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
                    user_id: req.session.userInfo.id
                };

                const orderFound = await Orders.findOne(query);

                if (!orderFound || !orderFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Đơn hàng không tồn tại!'
                    });
                }

                return res.json({
                    success: 1,
                    data: orderFound,
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
                    user_id: req.session.userInfo.id
                };

                const orderFound = await Orders.findOne(query);

                if (!orderFound || !orderFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Đơn hàng không tồn tại!'
                    });
                }

                await Orders.destroyOne({ id });

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
        const { customer_fullname, customer_phone, customer_email, customer_address, total } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                    user_id: req.session.userInfo.id
                };

                const orderFound = await Orders.findOne(query);

                if (!orderFound || !orderFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Đơn hàng không tồn tại!'
                    });
                }

                await Orders.updateOne({ id })
                    .set({
                        customer_fullname: customer_fullname || orderFound.customer_fullname,
                        customer_phone: customer_phone || orderFound.customer_phone,
                        customer_email: customer_email || orderFound.customer_email,
                        customer_address: customer_address || orderFound.customer_address,
                        total: total || orderFound.total,
                    });

                const orderUpdated = await Orders.findOne(query);

                return res.json({
                    success: 1,
                    data: orderUpdated,
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
        const { customer_fullname, customer_phone, customer_email, customer_address, total } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const orderCreated = await Orders.create({
                    customer_fullname,
                    customer_phone,
                    customer_email,
                    customer_address,
                    total,
                }).fetch();

                return res.json({
                    success: 1,
                    data: orderCreated,
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
