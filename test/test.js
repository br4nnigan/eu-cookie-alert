QUnit.test('Module Loaded', function (assert) {
  var cookieRegex = new RegExp('eucookiealert=1');
  assert.strictEqual(typeof euCookieAlert.show, 'function', 'Function Exists');
  assert.strictEqual(typeof euCookieAlert.show(), 'object', 'Function Runs');
  var cookieAlert = document.getElementById('eucookiealert');
  assert.notEqual(cookieAlert, null, 'Alert in DOM');
  var button = cookieAlert.querySelector('button');
  assert.notEqual(button, null, 'Button in DOM');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  button.dispatchEvent(event);
  assert.ok(document.cookie.match(cookieRegex), 'Cookie Exists');
  document.cookie = 'eucookiealert=; expires=-1; path=/';
});