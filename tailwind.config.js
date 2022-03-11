const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Fredoka', 'Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: colors.sky['500'],
				secondary: colors.green['400'],
			},
		},
	},
	plugins: [],
};
