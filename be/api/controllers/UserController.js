/**
 * UserController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    all: async (req, res) => {
        const { projectId } = req.params;
        const { page = 1, perPage = 10 } = req.query;
        try {
            if (req.session.userInfo && req.session.userInfo.id) {
                const userData = await User.find({
                    project: projectId,
                });

                res.json({
                    success: 1,
                    data: userData,
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
};
