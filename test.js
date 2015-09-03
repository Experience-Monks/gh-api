var ghApi = require('./')
var test = require('tape')

test('a simple callback-style GitHub API in node / browser', function (t) {
  t.plan(2)
  ghApi('repos/mattdesl/budo/contents/package.json', {
    query: {
      ref: 'bb0fba6cf19ee6eeda5415f9b2651110a42e0e39'
    }
  }, function (err, data, res) {
    if (err) return t.fail(err)
    t.equal(res.statusCode, 200, 'got pakacage')

    var str = new Buffer(data.content, data.encoding).toString()
    var pkg = JSON.parse(str)
    t.equal(pkg.version, '3.0.4', 'query.ref is correct')
  })
})
