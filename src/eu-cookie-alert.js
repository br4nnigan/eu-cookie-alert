(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.euCookieAlert = factory();
  }
}(this, function () {
  'use strict';
  var euCookieAlert = function () {
    var defaultOptions = {
      bodyClass: 'eu-cookie-alert',
      cookieKey: 'eucookiealert',
      cookieValue: 1,
      alertId: 'eucookiealert',
      alertMessage: 'This website uses cookies. Please read our privacy policy for more information.',
      agreeMessage: 'I understand'
    };
    //private methods
    var _setup_options = function (options) {
      var finalOptions = {};
      for (var defaultAttr in defaultOptions) {
        finalOptions[defaultAttr] = defaultOptions[defaultAttr];
      }
      for (var customAttr in options) {
        finalOptions[customAttr] = options[customAttr];
      }
      return finalOptions;
    };
    var _ap_eu_cookie = function (custom) {
      var options = _setup_options(custom);
      var body = document.body;
      var cookiekey = encodeURIComponent(options.cookieKey);
      var value = encodeURIComponent(options.cookieValue);
      var date = new Date();
      date.setDate(date.getDate() + 365);
      var cookieexpire = date.toUTCString();
      var cookieRegex = new RegExp(cookiekey + '=' + value);
      if (navigator.cookieEnabled && !document.cookie.match(cookieRegex)) {
        var cookieAlert = document.getElementById(options.alertId);
        if (cookieAlert === null) {
          cookieAlert = document.createElement('div');
          cookieAlert.id = options.alertId;
        } else {
          cookieAlert.innerHTML = '';
        }
        var cookieMessage = document.createElement('p');
        var cookieButton = document.createElement('button');
        cookieMessage.innerHTML = options.alertMessage;
        cookieButton.innerHTML = options.agreeMessage;
        _addEventListener(cookieButton, 'click', function (event) {
          event.preventDefault();
          document.cookie = cookiekey + '=' + value + ' ; expires=' + cookieexpire + '; path=/';
          cookieAlert.parentNode.removeChild(cookieAlert);
          if (body.classList) {
            body.classList.remove(options.bodyClass);
          } else {
            body.className = body.className.replace(new RegExp('(^|\\b)' + options.bodyClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        });
        cookieAlert.appendChild(cookieMessage);
        cookieMessage.appendChild(cookieButton);
        body.appendChild(cookieAlert);
        if (body.classList) {
          body.classList.add(options.bodyClass);
        } else {
          body.className += ' ' + options.bodyClass;
        }
      }
    };
    var _addEventListener = function (el, eventName, handler) {
      if (el.addEventListener) {
        el.addEventListener(eventName, handler);
      } else {
        el.attachEvent('on' + eventName, handler);
      }
    };
    var _init = function (start, options) {
      if (document.readyState !== 'loading') {
        start(options);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
          start(options);
        });
      } else {
        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'interactive') {
            start(options);
          }
        });
      }
    };
    //public methods
    return {
      show: function (options) {
        if (typeof options !== 'object') {
          options = {};
        }
        _init(_ap_eu_cookie, options);
        return this;
      }
    };
  }();
  return euCookieAlert;
}));