(function () {
  // properties
  'use strict';
  var nodeDependencies = require('./downloadNpmDependencies.js');

  // entry
  module.exports = run;

  // builds before plugin install hooks
  function run (context) {
    nodeDependencies.install(context);
  }
})();
