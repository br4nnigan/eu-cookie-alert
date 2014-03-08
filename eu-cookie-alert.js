function ap_cookie_ready(fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'interactive') {
        fn();
      }
    });
  }
}
function ap_eu_cookie() {
  var body = document.body;
  var bodyclass = 'eu-cookie-alert';
  var cookiekey = encodeURIComponent('ap_eucookiealert');
  var value = encodeURIComponent(1);
  var date = new Date();
  date.setDate(date.getDate() + 365);
  var cookieexpire = date.toUTCString();
  if (navigator.cookieEnabled && !document.cookie.match(/ap_eucookiealert=1/)) {
    var alertmessage = 'This website uses cookies. Please read our privacy policy for more information.';
    var agreemessage = 'I understand';
    if (typeof eucookiealertconfig == 'object') {
      if (typeof eucookiealertconfig.alertmessage == 'string') {
        alertmessage = eucookiealertconfig.alertmessage;
      }
      if (typeof eucookiealertconfig.agreemessage == 'string') {
        agreemessage = eucookiealertconfig.agreemessage;
      }
    }
    var cookieAlert = document.createElement('div');
    var cookieMessage = document.createElement('p');
    var cookieButton = document.createElement('button');
    cookieAlert.id = 'qp_eucookiealert';
    cookieMessage.innerHTML = alertmessage;
    cookieButton.innerHTML = agreemessage;
    addEventListener(cookieButton, 'click', function (event) {
      event.preventDefault();
      document.cookie = cookiekey + '=' + value + ' ; expires=' + cookieexpire + '; path=/';
      cookieAlert.parentNode.removeChild(cookieAlert);
      if (body.classList) {
        body.classList.remove(bodyclass);
      } else {
        body.className = body.className.replace(new RegExp('(^|\\b)' + bodyclass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });
    cookieAlert.appendChild(cookieMessage);
    cookieMessage.appendChild(cookieButton);
    body.appendChild(cookieAlert);
    if (body.classList) {
      body.classList.add(bodyclass);
    } else {
      body.className += ' ' + bodyclass;
    }
  }
}
function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, handler);
  }
}
ap_cookie_ready(ap_eu_cookie);