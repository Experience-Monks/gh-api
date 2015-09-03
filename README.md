# gh-api

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A thin utility for GitHub API requests in Node and the browser. After browserify and uglify, it bundles to 9kb.

For a streaming alternative that supports pagination, see [gh-api-stream](https://github.com/Jam3/gh-api-stream).

## Install

```sh
npm install gh-api --save
```

## Example

For example, getting a `package.json` from a GitHub repository:

```js
var github = require('gh-api')

var api = '/repos/mattdesl/gh-api/contents/package.json'
github(api, function (err, data) {
  if (err) throw err
  
  var buf = new Buffer(data.content, data.encoding)
  var pkg = JSON.parse(buf.toString())
  
  console.log(pkg.description)
  //> 'simple GitHub API requests in Node / browser'
})
```

## Usage

[![NPM](https://nodei.co/npm/gh-api.png)](https://www.npmjs.com/package/gh-api)

#### `req = ghApi(path, [opt], [cb])`

Sends a request to the GitHub API at the specified `path`, such as `'/repos/:owner/:repo/readme'`.

Options can be:

- `token` an optional GitHub API token for authentication
- `query` (String|Object) optional query parameters for the URL
- `method` (String) the method to use, default `'GET'`
- `timeout` (Number) milliseconds before timeout, default 0 (no timeout)
- `headers` optional headers object to override the defaults

Other options, such as `json`, are passed to [xhr-request](https://github.com/Jam3/xhr-request).

The `callback` is called with the arguments `(error, data, response)`

- `error` on success will be null/undefined
- `data` the result of the request, either a JSON object, string, or `ArrayBuffer`
- `response` the request response, see below

The response is normalized by [xhr-request](https://github.com/Jam3/xhr-request) in Node and the browser.

#### `req = ghApi.url(url, [opt], [cb])`

Same as above, but expects a full `url` to the GitHub endpoint.

#### `req.abort()`

Cancels a pending request and sends an error to the callback.

## See Also

- [gh-api-stream](https://www.npmjs.com/package/gh-api-stream) - for paginated / streaming results
- [gh-got](https://www.npmjs.com/package/gh-got) - a related library

## License

MIT, see [LICENSE.md](http://github.com/Jam3/gh-api/blob/master/LICENSE.md) for details.
