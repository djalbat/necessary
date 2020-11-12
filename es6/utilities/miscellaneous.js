"use strict";

import rc from "./miscellaneous/rc";
import log from "./miscellaneous/log";
import onETX from "./miscellaneous/onETX";
import prompt from "./miscellaneous/prompt";

import { get, post, request } from "./miscellaneous/ajax";

export default {
  log,
  rc,
  get,
  post,
  onETX,
  prompt,
  request
};
