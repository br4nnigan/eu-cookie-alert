jQuery(document).ready(function($) {
	var domain = window.location.host;
	if (navigator.cookieEnabled && $.cookie('ap_eucookiealert') != domain) {

		var alertmessage = 'This website uses cookies. Please read our privacy policy for more information.';
		var agreemessage = 'I understand';

		var messageboxstyle = {
			position: 'fixed',
			height: 'auto',
			width: '100%',
			bottom: 0,
			backgroundColor: '#fff',
			textAlign: 'center',
			borderTop: '1px solid black'
		};

		var messagestyle = {
			marginTop: 5,
			marginBottom: 5,
			display: 'block'
		};

		var buttonstyle = {
			marginLeft: 10
		};

		var bodystyle = {
			paddingBottom: 10
		};

		var bodyreset = {
			paddingBottom: 0
		};

		if (typeof eucookiealertconfig == 'object') {
			if (typeof eucookiealertconfig.alertmessage == 'string') {
				alertmessage = eucookiealertconfig.alertmessage;
			}
			if (typeof eucookiealertconfig.agreemessage == 'string') {
				agreemessage = eucookiealertconfig.agreemessage;
			}
			if (typeof eucookiealertconfig.messageboxstyle == 'object') {
				messageboxstyle = eucookiealertconfig.messageboxstyle;
			}
			if (typeof eucookiealertconfig.messagestyle == 'object') {
				messagestyle = eucookiealertconfig.messagestyle;
			}
			if (typeof eucookiealertconfig.buttonstyle == 'object') {
				buttonstyle = eucookiealertconfig.buttonstyle;
			}
			if (typeof eucookiealertconfig.bodystyle == 'object') {
				bodystyle = eucookiealertconfig.bodystyle;
			}
			if (typeof eucookiealertconfig.bodyreset == 'object') {
				bodyreset = eucookiealertconfig.bodyreset;
			}
		}

		var cookieAlert = $('<div>').attr('id','ap_eucookiealert');
		var cookieMessage = $('<p>').html(alertmessage);
		var cookieButton = $('<button>').html(agreemessage);
		cookieButton.click(function() {
			$.cookie('ap_eucookiealert', domain);
			cookieAlert.remove();
			$('body').css(bodyreset);
			return false;
		});
		cookieAlert.css(messageboxstyle);
		cookieMessage.css(messagestyle);
		cookieButton.css(buttonstyle);
		cookieMessage.appendTo(cookieAlert);
		cookieButton.appendTo(cookieMessage);
		cookieAlert.appendTo('body');
		$('body').css(bodystyle);
	}
});