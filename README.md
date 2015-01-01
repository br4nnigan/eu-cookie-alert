# EU Cookie Alert

[![Build Status](https://travis-ci.org/agilepixel/eu-cookie-alert.svg)](https://travis-ci.org/agilepixel/eu-cookie-alert)
[![devDependency Status](https://david-dm.org/agilepixel/eu-cookie-alert/dev-status.svg)](https://david-dm.org/agilepixel/eu-cookie-alert#info=devDependencies)


Display a message on on your website for users to consent to your website using cookies. See http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm for details on why you may want to do this.

Install manually or via Bower: `bower install eu-cookie-alert`.

## Use

Load the script alongside any other javascript libraries you may be using, and trigger the alert with the following:

    euCookieAlert.start();

Alternatively use the syntax:

    euCookieAlert.start({
    bodyClass: 'eu-cookie-alert',
    cookieKey: 'eucookiealert',
    cookieValue: 1,
    alertId: 'eucookiealert',
    alertMessage: 'This website uses cookies. Please read our privacy policy for more information.',
    agreeMessage: 'I understand'
    });

To amend the alert to your own preference

## License

Script is licensed under MIT license.
