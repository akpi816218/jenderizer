import { generateImages } from 'pwa-asset-generator';

await generateImages('src/icon0.png', 'dist', {
	background: '#010012',
	darkMode: true,
	favicon: true,
	maskable: true,
	iconOnly: true,
	index: 'dist/index.html',
	manifest: 'dist/manifest.webmanifest',
	mstile: true,
	padding: '5%',
	scrape: true,
	type: 'png'
});
