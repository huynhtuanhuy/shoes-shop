/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      unique: true,
      required: true,
    },
    sku: {
      type: 'string',
      unique: true,
      required: true,
    },
    description: {
      type: 'string',
    },
    views: {
      type: 'number',
      defaultsTo: 0
    },
    is_new: {
      type: 'boolean',
      defaultsTo: false
    },
    is_disable: {
      type: 'boolean',
      defaultsTo: false
    },
    categories: {
      collection: 'ProductCategories',
      via: 'product_id',
    },
    product_details: {
      collection: 'ProductDetails',
      via: 'product_id',
    },
  },
  schema: true,
  tableName: 'products'
};