/**
 * ProductsController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    all: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const productData = await Products.find({
                    user_id: req.session.userInfo.id
                });

                res.json({
                    success: 1,
                    data: productData,
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

                const productItemFound = await Products.findOne(query);

                if (!productItemFound || !productItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại!'
                    });
                }

                return res.json({
                    success: 1,
                    data: productItemFound,
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

                const productItemFound = await Products.findOne(query);

                if (!productItemFound || !productItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại!'
                    });
                }

                await Products.destroyOne({ id });

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
        const { name, slug, sku, views, is_disable } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                    user_id: req.session.userInfo.id
                };

                const productItemFound = await Products.findOne(query);

                if (!productItemFound || !productItemFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Sản phẩm không tồn tại!'
                    });
                }

                await Products.updateOne({ id })
                    .set({
                        name: name || productItemFound.sale_price,
                        sku: sku || productItemFound.sale_price,
                        views: views || productItemFound.sale_price,
                        slug: slug || productItemFound.sale_price,
                        is_disable: is_disable || productItemFound.is_disable,
                    });

                const productUpdated = await Products.findOne(query);

                return res.json({
                    success: 1,
                    data: productUpdated,
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
        const { name, slug, sku, views, is_disable } = req.body;
        
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const productCreated = await Products.create({
                    name,
                    sku,
                    views,
                    slug,
                    is_disable,
                }).fetch();

                return res.json({
                    success: 1,
                    data: productCreated,
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
