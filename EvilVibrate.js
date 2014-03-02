
var EvilVibrate = new Class({
	initialize: function(platform) {
		this.platform = platform;

		this.image = "images/";
		this.sound = "sounds/";

		switch (platform) {
			case "android4":
				this.image += "android.png";
				this.sound += "Girtab.ogg";
				break;
			case "iphone":
				this.image += "iphone.png";
				this.sound += "marimba.mp3";
				break;
		}
	},


	html: function() {
//		return '<img width="100%" src="' + this.image + '" onclick="window.location.href=\'tel:15135024072\';" />' + '<audio autoplay="autoplay">' + '<source src="' + this.sound + ' "</audio>';
		return '<img width="100%" src="' + this.image + '" onclick="window.location.href=\'images/catwalking.gif\';" />' + '<audio autoplay="autoplay">' + '<source src="' + this.sound + ' "</audio>';

	}
});

navigator.vibrate = navigator.vibrate ||
navigator.webkitVibrate ||
navigator.mozVibrate ||
navigator.msVibrate;

navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
