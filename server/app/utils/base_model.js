/**
 * 给所有的 Model 扩展功能
 * http://mongoosejs.com/docs/plugins.html
 */
'use strict';

const utils = require('.');

module.exports = function(schema) {
  schema.methods.create_at_ago = function() {
    return utils.formatDate(this.create_at, true);
  };

  schema.methods.update_at_ago = function() {
    return utils.formatDate(this.update_at, true);
  };
};
