const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
const withImages = require('next-images');

module.exports = withImages(
	withSass(
		withFonts({
			webpack(config, options) {
				return config;
			},
		}),
	),
);
