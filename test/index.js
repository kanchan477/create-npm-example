const test = require('tap').test

const generateRandomString = require('..')

test('test 1', function(t){
  const string = generateRandomString()
  t.is(typeof string, 'string')
  t.ok(/\-\d{2}$/.test(string))
  t.ok(string.length > 0)
  t.end()
})