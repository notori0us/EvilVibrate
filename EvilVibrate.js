/*
 * The EvilVibrate Class
 *
 * A proof of concept design to trick users int
 *
 */
var EvilVibrate = new Class({
	initialize: function(platform) {
		this.platform = platform;

		this.image = "images/";
		this.sound = "sounds/";

		switch (platform) {  // figure out our platform
			case "android4":
				this.image += "android.png";
				this.sound += "Girtab.mp3";
				break;

			case "iphone":
				this.image += "iphone.png";
				this.sound += "marimba.mp3";
				break;

			case "winphone":
				this.image += "windows.png";
				this.sound += "windowsphone.mp3";
				break;
		}
	},

	html: function() {
		return '<img id="full-screen-background-image" width="100%" src="' + this.image + '" onclick="window.location.href=\'http://www.amazon.com/gp/product/B000F1OS20/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000F1OS20&linkCode=as2&tag=custcompbui03-20\';" />' + '<audio autoplay="autoplay">' + '<source src="' + this.sound + ' "</audio>';

	},

	vibrate: function () {
		navigator.vibrate = navigator.vibrate ||
			navigator.webkitVibrate ||
			navigator.mozVibrate ||
			navigator.msVibrate;

		navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
	},
});


