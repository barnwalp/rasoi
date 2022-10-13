/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
		colors: {
			primary: '#E67E22',
			darkprimary: '#CF6D17',
			lightgray: '#F4F4F4',
			darkgray: '#2D314D',
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/src/assets/hero_picture.jpg')",
			}
		},
  },
  plugins: [],
}
