var versions = require('./versions');

module.exports = function (data, done) {
  versions().then(function (result) {
    return done(null, result);
  });
};
