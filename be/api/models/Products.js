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
    views: {
      type: 'number',
      defaultsTo: 0
    },
    is_disable: {
      type: 'boolean',
      defaultsTo: false
    },
    categories: {
      collection: 'ProductCategories',
      via: 'product_id',
    },
  },
  schema: true,
  tableName: 'products'
};