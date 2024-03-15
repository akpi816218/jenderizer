import { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export const config: Config = {
	content: [
		'src/**/*.{html,tsx}',
		'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'bounce-fast': 'bounce 0.5s infinite'
			},
			borderRadius: {
				huge: '2rem',
				giga: '3rem'
			},
			colors: {
				yellow: '#FEF32A',
				white: '#FEFEFE',
				purple: '#9D57D2',
				black: '#010101'
			},
			width: {
				'25c': '25em',
				'50c': '50em'
			}
		},
		fontFamily: {
			sans: ['Poppins', 'Ubuntu', 'Inter', 'Roboto', 'sans-serif'],
			mono: ['Ubuntu Mono', 'Roboto Mono', 'monospace'],
			'press-start': ['"Press Start 2P"', 'monospace']
		},
		scale: {
			175: '1.75',
			200: '2',
			250: '2.5'
		}
	},
	plugins: [
		nextui({
			defaultTheme: 'light'
		})
	]
};

export default config;
