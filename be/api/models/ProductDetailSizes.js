/**
 * ProductDetailSizes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    product_detail_id: {
      model: 'ProductDetails',
    },

    size: {
      type: 'string',
      required: true,
    },

    size_code: {
      type: 'string',
      required: true,
    },

    quantity: {
      type: 'number',
      defaultsTo: 0,
    },
  },
  schema: true,
  tableName: 'product_detail_sizes'
};

