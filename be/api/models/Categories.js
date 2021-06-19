/**
 * Categories.js
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
      required: true,
      unique: true,
    },

    parent_id: {
      model: 'Categories',
    },
  },
  schema: true,
  tableName: 'categories'
};
