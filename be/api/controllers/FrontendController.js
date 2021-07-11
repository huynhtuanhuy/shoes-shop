/**
 * FrontendController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
 const slug = require("slug");
 const bcrypt = require('bcrypt');

 module.exports = {
    getOrders: async (req, res) => {
        const { page = 1, perPage = 10 } = req.query;

        try {
            const total = await Orders.count({
                user_id: req.session.userInfo.id,
            });
            const orderData = await Orders.find({
                user_id: req.session.userInfo.id,
            }).limit(Number(perPage)).skip((Number(page) - 1) * Number(perPage)).populate('order_product_details');

            res.json({
                success: 1,
                data: {
                    data: orderData,
                    page: Number(page),
                    total: total,
                    perPage: Number(perPage),
                    totalPage: Math.ceil(Number(total)/Number(perPage)),
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
    createOrder: async (req, res) => {
        const { fullname, phone, address, email, password, carts } = req.body;

        if (!fullname || !phone || !address || !email || !password || !carts || carts.length == 0) {
            return res.status(400).json({
                success: 0,
                data: null,
                message: 'Bạn cần điền đầy đủ thông tin!'
            });
        }

        try {
            let userFound = await Users.findOne({ username: email });
            if (!userFound || !userFound.id) {
                userFound = await Users.create({
                    fullname,
                    phone,
                    address,
                    email,
                    username: email,
                    password: bcrypt.hashSync(password, 12),
                    type: 'basic',
                }).fetch();
            }

            const orderCreated = await Orders.create({
                user_id: userFound.id,
                customer_fullname: fullname,
                customer_phone: phone,
                customer_email: email,
                customer_address: address,
                status: 'pending',
                total: carts.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0),
            }).fetch();

            for (let i = 0; i < carts.length; i++) {
                const cartItem = carts[i];
                await OrderProductDetails.create({
                    order_id: orderCreated.id,
                    product_detail_id: cartItem.productDetail.id,
                    product_size_detail_id: cartItem.productSizeDetail.id,
                    quantity: cartItem.quantity,
                    price: cartItem.price,
                    sale_price: cartItem.price,
                });
            }

            res.json({
                success: 1,
                data: orderCreated,
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
    getProductBySlug: async (req, res) => {
        const { productSlug } = req.params;
        try {
            const productFound = await Products.findOne({
                slug: productSlug,
            }).populate('images').populate('product_details');

            if (!productFound || !productFound.id) {
                return res.status(404).json({
                    success: 0,
                    data: null,
                    message: 'Sản phẩm không tồn tại!',
                });
            }

            const productDetails = await ProductDetails.find({
                id: productFound.product_details.map(item => item.id)
            }).populate('color_id').populate('sizes');

            const productSizeDetails = await ProductSizeDetails.find({
                id: productDetails.reduce((total, item) => [
                    ...total,
                    ...item.sizes.map(size => size.id),
                ], [])
            }).populate('size_id')
            
            res.json({
                success: 1,
                data: {
                    ...productFound,
                    product_details: productDetails.map(item => {
                        return {
                            ...item,
                            sizes: productSizeDetails.filter(_item => {
                                return item.sizes.map(size => size.id).includes(_item.id);
                            }),
                        };
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
    filterProducts: async (req, res) => {
        const { page = 1, perPage = 10, sorted = '', filtered = '' } = req.query;
        try {
            let category = null;
            let color = null;
            let sizes = [];
            let priceRange = [0, 100000000];
            
            try {
                const filteredParser = JSON.parse(filtered);

                category = filteredParser.category;
                color = filteredParser.color;
                sizes = filteredParser.sizes;
                priceRange = filteredParser.priceRange;
            } catch (error) {
            }

            const productSizeDetails = await ProductSizeDetails.find(sizes && sizes.length > 0 ? {
                size_id: sizes,
            } : {});

            const productDetailQuery = {
                id: productSizeDetails.map(item => item.product_detail_id),
                price: { '>=': priceRange && priceRange[0] || 0, '<=': priceRange && priceRange[1] || 100000000 },
            };

            if (color) {
                productDetailQuery.color_id = color;
            }
            console.log(productDetailQuery);

            const productDetails = await ProductDetails.find(productDetailQuery);
            console.log(productDetails.map(item => item.product_id));

            const productCategoryQuery = {
                product_id: productDetails.map(item => item.product_id),
            };

            if (category) {
                productCategoryQuery.category_id = category;
            }

            const productCategories = await ProductCategories.find(productCategoryQuery);

            const total = await Products.count({
                id: productCategories.map(item => item.product_id),
            });
            const productData = await Products.find({
                id: productCategories.map(item => item.product_id),
            })
            .limit(Number(perPage))
            .skip((Number(page) - 1) * Number(perPage))
            .sort(sorted)
            .populate('product_details')
            .populate('images');

            res.json({
                success: 1,
                data: {
                    data: productData,
                    page: Number(page),
                    total: total,
                    perPage: Number(perPage),
                    totalPage: Math.ceil(Number(total)/Number(perPage)),
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
    productColors: async (req, res) => {
        try {
            const colorData = await Colors.find({});

            res.json({
                success: 1,
                data: colorData,
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
    productSizes: async (req, res) => {
        try {
            const sizeData = await Sizes.find({});

            res.json({
                success: 1,
                data: sizeData,
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
    topFeaturedProducts: async (req, res) => {
        try {
            const productData = await Products.find({ is_disable: false })
                .limit(10)
                .sort([{ sold: 'DESC' }])
                .populate('product_details')
                .populate('images');

            res.json({
                success: 1,
                data: productData,
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
    topViewProducts: async (req, res) => {
        try {
            const productData = await Products.find({ is_disable: false })
                .limit(10)
                .sort([{ views: 'DESC' }])
                .populate('product_details')
                .populate('images');

            res.json({
                success: 1,
                data: productData,
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
    topNewProducts: async (req, res) => {
        try {
            const productData = await Products.find({ is_disable: false, is_new: true })
                .limit(10)
                .sort([{ updated_at: 'DESC' }])
                .populate('product_details')
                .populate('images');

            res.json({
                success: 1,
                data: productData,
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
