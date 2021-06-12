/**
 * CategoriesController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    all: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const categoryData = await Categories.find({
                    user_id: req.session.userInfo.id
                });

                res.json({
                    success: 1,
                    data: categoryData,
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

                const categoryFound = await Categories.findOne(query);

                if (!categoryFound || !categoryFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Danh mục sản phẩm không tồn tại!'
                    });
                }

                return res.json({
                    success: 1,
                    data: categoryFound,
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

                const categoryFound = await Categories.findOne(query);

                if (!categoryFound || !categoryFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Danh mục sản phẩm không tồn tại!'
                    });
                }

                await Categories.destroyOne({ id });

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
        const { name, slug, parent_id } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const query = {
                    id,
                };

                const categoryFound = await Categories.findOne(query);

                if (!categoryFound || !categoryFound.id) {
                    return res.status(404).json({
                        success: 0,
                        data: null,
                        message: 'Danh mục sản phẩm không tồn tại!'
                    });
                }

                await Categories.updateOne({ id })
                    .set({
                        name: name || categoryFound.name,
                        slug: slug || categoryFound.slug,
                        parent_id: parent_id || categoryFound.parent_id,
                    });

                const categoryUpdated = await Categories.findOne(query);

                return res.json({
                    success: 1,
                    data: categoryUpdated,
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
        const { name, slug, parent_id } = req.body;

        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const categoryCreated = await Categories.create({
                    name,
                    slug,
                    parent_id,
                }).fetch();

                return res.json({
                    success: 1,
                    data: categoryCreated,
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
