'use strict';

const rc = require('./miscellaneous/rc'),
      log = require('./miscellaneous/log'),
      ajax = require('./miscellaneous/ajax'),
      onETX = require('./miscellaneous/onETX'),
      prompt = require('./miscellaneous/prompt');

const { get, post } = ajax;

module.exports = {
  log,
  rc,
  get,
  post,
  onETX,
  prompt
};
