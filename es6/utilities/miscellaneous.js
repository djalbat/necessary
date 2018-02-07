'use strict';

const log = require('./miscellaneous/log'),
      ajax = require('./miscellaneous/ajax'),
      onETX = require('./miscellaneous/onETX');

const { get, post } = ajax;

module.exports = {
  log: log,
  get: get,
  post: post,
  onETX: onETX
};
