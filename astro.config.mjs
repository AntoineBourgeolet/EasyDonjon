// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'cosmic-cloud';
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'abour';

// https://astro.build/config
export default defineConfig({
	site: `https://${repositoryOwner}.github.io`,
	base: process.env.GITHUB_ACTIONS ? `/${repository}` : '/',
	integrations: [
		starlight({
			title: 'EasyDonjon',
			description: 'Stratégies ultra-rapides des donjons World of Warcraft.',
			logo: {
				src: './src/assets/logo-easy-donjon.png',
				alt: 'Logo EasyDonjon',
			},
			disable404Route: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
			components: {
				ThemeProvider: './src/components/ThemeProvider.astro',
			},
			sidebar: [
				{
					label: 'Donjons',
					items: [
						{ label: 'Midnight Saison 1', autogenerate: { directory: 'donjons/midnight/s1' } },
					],
				},
			],
		}),
	],
});
