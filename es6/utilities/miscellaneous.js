'use strict';

const rc = require('./miscellaneous/rc'),
      log = require('./miscellaneous/log'),
      ajax = require('./miscellaneous/ajax'),
      onETX = require('./miscellaneous/onETX');

const { get, post } = ajax;

module.exports = {
  log: log,
  rc: rc,
  get: get,
  post: post,
  onETX: onETX
};
