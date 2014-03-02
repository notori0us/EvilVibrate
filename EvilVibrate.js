
var EvilVibrate = new Class({
	initialize: function(platform) {
		this.platform = platform;

		this.image = "images/";
		this.sound = "sounds/";

		switch (platform) {
			case "android4":
				this.image += "android.png";
				this.sound += "Girtab.ogg.";
			break;
		}
	},
	

	html: function() {
		return '<img width="100%" src="' + this.image + '" onclick="window.location.href=\'tel:15135024072\';" />' + '<audio autoplay="autoplay">' + '<source src="' + this.sound + ' "</audio>';

	}
});

test = new EvilVibrate("android4");
