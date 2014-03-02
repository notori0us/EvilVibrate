
var EvilVibrate = new Class({
	initialize: function(platform) {
		this.platform = platform;

		this.image = "images/"
		this.sound = "sounds/"

		switch (platform) {
			case "android4":
				this.image += "android4"
				this.sound += "android4"
			break;
		}
	}
	

	html: function() {
		return ""
	}
);
