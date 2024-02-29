import { writable } from 'svelte/store';

const initAvailableThemes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset'
] as const;
const initCurrentTheme = 'synthwave';

export const availableThemes = writable(initAvailableThemes);
export const currentTheme = writable<(typeof initAvailableThemes)[number]>(initCurrentTheme);
