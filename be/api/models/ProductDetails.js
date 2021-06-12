/**
 * ProductDetails.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    price: {
      type: 'number',
      required: true,
    },

    product_id: {
      model: 'Products',
    },
    
    color_id: {
      model: 'Colors',
    },
  },
  schema: true,
  tableName: 'product_details'
};

