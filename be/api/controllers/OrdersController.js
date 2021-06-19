/**
 * OrdersController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    find: async (req, res) => {
        const { page = 1, perPage = 10, sorted = [], filtered = [] } = req.query;
        try {
            const filter = {};

            if (filtered && filtered.length > 0) {
                for (let i = 0; i < filtered.length; i++) {
                    const filterItem = JSON.parse(filtered[i]);
                    if (filterItem.id && filterItem.value) {
                        filter[filterItem.id] = { contains: filterItem.value };
                    }
                }
            }

            const total = await Orders.count(filter);
            const orderData = await Orders.find(filter)
                .limit(Number(perPage))
                .skip((Number(page) - 1) * Number(perPage))
                .sort(sorted && sorted.length > 0 ? sorted.map(sortItem => JSON.parse(sortItem)).map(sortItem => ({ [sortItem.id]: sortItem.desc ? 'DESC' : 'ASC' })) : []);

            res.json({
                success: 1,
                data: {
                    data: orderData,
                    page: Number(page),
                    total: total,
                    perPage: Number(perPage),
                },
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
    findOne: async (req, res) => {
        const { id } = req.params;

        try {
            const query = {
                id,
            };

            const orderFound = await Orders.findOne(query);

            if (!orderFound || !orderFound.id) {
                return res.status(404).json({
                    success: 0,
                    data: null,
                    message: 'Đơn hàng không tồn tại!'
                });
            }

            const order_product_details = await OrderProductDetails.find({ order_id: orderFound.id });
            const product_details = await ProductDetails.find({
                id: {
                    in: order_product_details.map(item => item.product_detail_id),
                }
            }).populate('product_id').populate('color_id').populate('size_id');

            return res.json({
                success: 1,
                data: {
                    ...orderFound,
                    order_product_details: order_product_details.map(item => {
                        return {
                            ...item,
                            product_detail: product_details.filter(_item => _item.id == item.product_detail_id)[0]
                        }
                    }),
                },
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
    update: async (req, res) => {
        const { id } = req.params;
        const { user_id, customer_fullname, customer_phone, customer_email, customer_address, status, total } = req.body;

        try {
            const query = {
                id,
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
                    user_id,
                    customer_fullname,
                    customer_phone,
                    customer_email,
                    customer_address,
                    status,
                    total
                });

            const orderUpdated = await Orders.findOne(query);

            return res.json({
                success: 1,
                data: orderUpdated,
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
