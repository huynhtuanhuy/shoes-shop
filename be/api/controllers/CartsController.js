/**
 * CartsController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    all: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const cartData = await Carts.find({
                    user_id: req.session.userInfo.id
                });

                res.json({
                    success: 1,
                    data: cartData,
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

                const cartItemFound = await Carts.findOne(query);

                if (!cartItemFound || !cartItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại trong giỏ hàng!'
                    });
                }

                return res.json({
                    success: 1,
                    data: cartItemFound,
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

                const cartItemFound = await Carts.findOne(query);

                if (!cartItemFound || !cartItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại trong giỏ hàng!'
                    });
                }

                await Carts.destroyOne({ id });

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
        const { product_detail_id, quantity, price, sale_price } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                    user_id: req.session.userInfo.id
                };

                const cartItemFound = await Carts.findOne(query);

                if (!cartItemFound || !cartItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại trong giỏ hàng!'
                    });
                }

                await Carts.updateOne({ id })
                    .set({
                        product_detail_id: product_detail_id || cartItemFound.product_detail_id,
                        quantity: quantity || cartItemFound.quantity,
                        price: price || cartItemFound.price,
                        sale_price: sale_price || cartItemFound.sale_price,
                    });

                const cartUpdated = await Carts.findOne(query);

                return res.json({
                    success: 1,
                    data: cartUpdated,
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
        const { product_detail_id, quantity, price, sale_price } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const cartCreated = await Carts.create({
                    product_detail_id,
                    quantity,
                    price,
                    sale_price,
                }).fetch();

                return res.json({
                    success: 1,
                    data: cartCreated,
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
