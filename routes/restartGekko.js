const _ = require('lodash');

const cache = require('../state/cache');
const Logger = require('../state/logger');
const gekkoManager = cache.get('gekkos');

const base = require('./baseConfig');

// starts an import
// requires a post body with a config object
module.exports = function *() {
  const id = this.request.body.id;

  const state = gekkoManager.restart({ id });

  this.body = state;
}