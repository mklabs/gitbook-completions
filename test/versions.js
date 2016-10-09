var versions = require('../lib/versions');
var assert = require('assert');

describe('lib/versions', () => {
  it('is a function', () => {
    assert.equal(typeof versions, 'function');
  });

  it('returns available versions', (done) => {
    versions()
      .then(function (result) {
        assert.equal(Array.isArray(result), true);
        assert.ok(result.indexOf('3.2.2') !== -1);
        assert.ok(result.indexOf('pre') !== -1);
        assert.ok(result.indexOf('latest') !== -1);
        done();
      })
      .catch(done);
  });
});
