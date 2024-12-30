/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["./layout/*.liquid", "./templates/*.liquid"],
	content: [
		"./layout/*.liquid",
		"./sections/*.liquid",
		"./snippets/*.liquid",
	],
	theme: {
		extend: {
			height: {
				94: "22rem",
			},
		},
	},
	plugins: [],
};