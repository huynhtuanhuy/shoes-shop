/**
 * Carts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    user_id: {
      model: 'Users',
    },

    product_detail_id: {
      model: 'ProductDetails',
    },

    product_size_detail_id: {
      model: 'ProductSizeDetails',
    },

    quantity: {
      type: 'number',
      required: true,
    },

    price: {
      type: 'number',
      required: true,
    },

    sale_price: {
      type: 'number',
      required: true,
    },
  },
  schema: true,
  tableName: 'carts'
};

