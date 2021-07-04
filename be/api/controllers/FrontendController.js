/**
 * FrontendController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const slug = require("slug");

 module.exports = {
    findCategoryOptions: async (req, res) => {
        try {
            const categoryData = await Categories.find({});

            res.json({
                success: 1,
                data: categoryData,
                message: '',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    findCategories: async (req, res) => {
        const { page = 1, perPage = 10, sorted = [], filtered = [] } = req.query;
        try {
            const categoryData = await Categories.find({ parent_id: null })
                .populate('children');

            res.json({
                success: 1,
                data: categoryData,
                message: '',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: 0,
                data: null,
                message: error && error.message || 'Đã có lỗi xảy ra, vui lòng thử lại sau!'
            });
        }
    },
    findOneCategory: async (req, res) => {
        const { id } = req.params;

        try {
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
