/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#00712d',
				secondary: '#ff9100',
				tertiary: 'var(--color-tertiary)',
				mainBg: 'var(--color-mainBg)',
				secondaryBg: '#ffe0b2'
			}
		},
	},
	plugins: [],
}
