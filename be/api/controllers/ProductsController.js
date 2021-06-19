/**
 * ProductsController.js
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const slug = require('slug');

 module.exports = {
    options: async (req, res) => {
        try {
            const productData = await Products.find({}).populate('categories').populate('product_details');

            const categories = await Categories.find({
                id: {
                    in: productData.reduce((total, item) => {
                        return [
                            ...total,
                            ...(item.categories || []).map(category => category.category_id)
                        ]
                    }, [])
                }
            });
            
            const product_details = await ProductDetails.find({
                id: {
                    in: productData.reduce((total, item) => {
                        return [
                            ...total,
                            ...(item.product_details || []).map(product_detail => product_detail.id)
                        ]
                    }, [])
                }
            }).populate('color_id').populate('size_id');

            res.json({
                success: 1,
                data: productData.map(product => {
                    return {
                        ...product,
                        categories: (product.categories || []).map(category => {
                            return {
                                ...category,
                                category: categories.filter(item => item.id == category.category_id)[0],
                            }
                        }),
                        product_details: (product.product_details || []).map(product_detail => {
                            return product_details.filter(item => item.id == product_detail.id)[0];
                        }),
                    }
                }),
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

            const total = await Products.count(filter);
            const productData = await Products.find(filter)
                .limit(Number(perPage))
                .skip((Number(page) - 1) * Number(perPage))
                .sort(sorted && sorted.length > 0 ? sorted.map(sortItem => JSON.parse(sortItem)).map(sortItem => ({ [sortItem.id]: sortItem.desc ? 'DESC' : 'ASC' })) : [])
                .populate('categories')
                .populate('product_details');

            const categories = await Categories.find({
                id: {
                    in: productData.reduce((total, item) => {
                        return [
                            ...total,
                            ...(item.categories || []).map(category => category.category_id)
                        ]
                    }, [])
                }
            });

            res.json({
                success: 1,
                data: {
                    data: productData.map(product => {
                        return {
                            ...product,
                            categories: (product.categories || []).map(category => {
                                return {
                                    ...category,
                                    category: categories.filter(item => item.id == category.category_id)[0],
                                }
                            })
                        }
                    }),
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

            const productFound = await Products.findOne(query).populate('categories').populate('product_details');

            if (!productFound || !productFound.id) {
                return res.status(404).json({
                    success: 0,
                    data: null,
                    message: 'Sản phẩm không tồn tại!'
                });
            }

            const product_details = await ProductDetails.find({
                id: {
                    in: productFound.product_details.map(item => item.id),
                }
            }).populate('size_id').populate('color_id');

            return res.json({
                success: 1,
                data: {
                    ...productFound,
                    product_details,
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
    destroy: async (req, res) => {
        const { id } = req.params;

        try {
            const query = {
                id,
            };

            const productFound = await Products.findOne(query);

            if (!productFound || !productFound.id) {
                return res.status(404).json({
                    success: 0,
                    data: null,
                    message: 'Sản phẩm không tồn tại!'
                });
            }

            await Products.destroyOne({ id });
            await ProductCategories.destroy({
                product_id: id,
            });

            return res.json({
                success: 1,
                data: null,
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
        const { name, sku, is_disable, description, is_new, categories, product_details } = req.body;

        try {
            const productExist = await Products.findOne({ sku });

            if (productExist && productExist.id && productExist.id != id) {
                return res.status(400).json({
                    success: 0,
                    data: null,
                    message: 'Đã tồn tại sản phẩm với mã SKU này!'
                });
            }

            const query = {
                id,
            };

            const productFound = await Products.findOne(query).populate('categories').populate('product_details');

            if (!productFound || !productFound.id) {
                return res.status(404).json({
                    success: 0,
                    data: null,
                    message: 'Sản phẩm không tồn tại!'
                });
            }

            await Products.updateOne({ id })
                .set({
                    name: name || productFound.name,
                    slug: slug(name || productFound.name),
                    sku: sku || productFound.sku,
                    description,
                    is_new,
                    is_disable,
                });

            if (categories) {
                const categoriesToDelete = [];
                for (let i = 0; i < productFound.categories.length; i++) {
                    if (!categories.includes(productFound.categories[i].category_id)) {
                        categoriesToDelete.push(productFound.categories[i].id);
                    }
                }
                await ProductCategories.destroy({
                    id: {
                        in: categoriesToDelete
                    }
                });
    
                for (let i = 0; i < categories.length; i++) {
                    if (!productFound.categories.map(category => category.category_id).includes(categories[i])) {
                        await ProductCategories.create({
                            category_id: categories[i],
                            product_id: productFound.id,
                        });
                    }
                }
            }

            if (product_details) {
                // const productDetailsToDelete = [];
                // for (let i = 0; i < productFound.product_details.length; i++) {
                //     if (!product_details.includes(productFound.product_details[i].category_id)) {
                //         productDetailsToDelete.push(productFound.product_details[i].id);
                //     }
                // }
                // await ProductDetails.destroy({
                //     id: {
                //         in: productDetailsToDelete
                //     }
                // });

                for (let i = 0; i < product_details.length; i++) {
                    const product_detail = product_details[i];

                    if (!product_detail.id) {
                        const colorCreated = await Colors.create({
                            color_name: product_detail.color_name,
                            color_code: product_detail.color_code,
                        }).fetch();
                        
                        const sizeCreated = await Sizes.create({
                            size: product_detail.size,
                            size_code: product_detail.size_code,
                        }).fetch();
                        
                        const productDetail = await ProductDetails.create({
                            product_id: productFound.id,
                            color_id: colorCreated.id,
                            size_id: sizeCreated.id,
                            price: product_detail.price,
                            quantity: product_detail.quantity,
                        }).fetch();
                    } else {
                        await ProductDetails.updateOne({
                            id: product_detail.id
                        }).set({
                            price: product_detail.price,
                            quantity: product_detail.quantity,
                        });

                        if (product_detail.color_id) {
                            await Colors.updateOne({
                                id: product_detail.color_id
                            }).set({
                                color_name: product_detail.color_name,
                                color_code: product_detail.color_code,
                            });
                        }
                        if (product_detail.size_id) {
                            await Sizes.updateOne({
                                id: product_detail.size_id
                            }).set({
                                size: product_detail.size,
                                size_code: product_detail.size_code,
                            });
                        }
                    }
                }
            }

            const productUpdated = await Products.findOne(query);

            return res.json({
                success: 1,
                data: productUpdated,
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
    create: async (req, res) => {
        const { name, sku, desciption, is_new, is_disable, categories, product_details } = req.body;
        try {
            const productExist = await Products.find({ sku }).limit(1);

            if (productExist && productExist.id) {
                return res.status(400).json({
                    success: 0,
                    data: null,
                    message: 'Đã tồn tại sản phẩm với mã SKU này!'
                });
            }

            const lastProduct = await Products.find({}).sort('id DESC').limit(1);

            const productCreated = await Products.create({
                name,
                slug: slug(name),
                sku: sku || `SP${lastProduct[0] && lastProduct[0].id ? lastProduct[0].id + 1 : 1}`,
                desciption,
                is_new,
                is_disable,
            }).fetch();

            for (let i = 0; i < categories.length; i++) {
                const category = categories[i];

                await ProductCategories.create({
                    category_id: category,
                    product_id: productCreated.id,
                });
            }

            for (let i = 0; i < product_details.length; i++) {
                const product_detail = product_details[i];
                
                const colorCreated = await Colors.create({
                    color_name: product_detail.color_name,
                    color_code: product_detail.color_code,
                }).fetch();
                
                const sizeCreated = await Sizes.create({
                    size: product_detail.size,
                    size_code: product_detail.size_code,
                }).fetch();
                
                const productDetail = await ProductDetails.create({
                    product_id: productCreated.id,
                    color_id: colorCreated.id,
                    size_id: sizeCreated.id,
                    price: product_detail.price,
                    quantity: product_detail.quantity,
                }).fetch();
            }

            return res.json({
                success: 1,
                data: productCreated,
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
