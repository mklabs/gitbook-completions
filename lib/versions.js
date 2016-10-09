var registry = require('gitbook-cli/lib/registry');

module.exports = function () {
  return registry.versions()
    .then(function (versions) {
      return versions.versions.concat(Object.keys(versions.tags));
    });
};
