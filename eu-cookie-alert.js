jQuery(document).ready(function($) {
	var domain = window.location.host;
	if (navigator.cookieEnabled && $.cookie('ap_eucookiealert') != domain) {
		var cookieAlert = $('<div>');
		var cookieMessage = $('<p>').html('This website accepts cookies. Please read our privacy policy for more information.');
		var cookieButton = $('<button>').html('I understand');
		cookieButton.click(function() {
			$.cookie('ap_eucookiealert', domain);
			cookieAlert.remove();
			return false;
		});
		cookieAlert.css({
			position: 'fixed',
			height: 'auto',
			width: '100%',
			bottom: 0,
			backgroundColor: '#fff',
			textAlign: 'center',
			borderTop: '1px solid black'
		});
		cookieMessage.css({
			marginTop: 5,
			marginBottom: 5,
			display: 'block'
		});
		cookieButton.css({
			marginLeft: 10
		});
		cookieMessage.appendTo(cookieAlert);
		cookieButton.appendTo(cookieMessage);
		cookieAlert.appendTo('body');
	}
});