/**
 * ProductDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    product_id: {
      model: 'Products',
    },
    
    color_id: {
      model: 'Colors',
    },
    
    size_id: {
      model: 'Sizes',
    },

    price: {
      type: 'number',
      required: true,
    },

    quantity: {
      type: 'number',
      defaultsTo: 0,
    },
  },
  schema: true,
  tableName: 'product_details'
};

