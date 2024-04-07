export const resorts = [
	{ name: 'Zermatt', country: 'Switzerland' },
	{ name: 'Chamonix-Mont-Blanc', country: 'France' },
	{ name: 'St. Anton am Arlberg', country: 'Austria' },
	{ name: 'Verbier', country: 'Switzerland' },
	{ name: 'Courchevel', country: 'France' },
	{ name: "Val d'Isère", country: 'France' },
	{ name: 'Davos', country: 'Switzerland' },
	{ name: 'Kitzbühel', country: 'Austria' },
	{ name: 'Saalbach-Hinterglemm', country: 'Austria' },
	{ name: 'Gstaad', country: 'Switzerland' },
	{ name: 'Meribel', country: 'France' },
	{ name: 'Innsbruck', country: 'Austria' },
	{ name: 'Arosa', country: 'Switzerland' },
	{ name: 'La Grave', country: 'France' },
	{ name: 'Lech', country: 'Austria' },
	{ name: 'Cervinia', country: 'Italy' },
	{ name: 'Engelberg', country: 'Switzerland' },
	{ name: 'Portes du Soleil (Morzine, Avoriaz)', country: 'France' },
	{ name: 'Portes du Soleil (Morzine, Avoriaz)', country: 'Switzerland' },
	{ name: 'Megève', country: 'France' },
	{ name: 'Ischgl', country: 'Austria' },
	{ name: 'St. Moritz', country: 'Switzerland' },
	{ name: 'Serre Chevalier', country: 'France' },
	{ name: 'Crans-Montana', country: 'Switzerland' },
	{ name: "Alpe d'Huez", country: 'France' },
	{ name: 'Zell am See', country: 'Austria' },
	{ name: 'Courmayeur', country: 'Italy' },
	{ name: 'Solden', country: 'Austria' },
	{ name: 'Le Grand-Bornand', country: 'France' },
	{ name: 'Saas Fee', country: 'Switzerland' },
	{ name: 'Mayrhofen', country: 'Austria' },
	{ name: 'Flaine', country: 'France' },
	{ name: "Cortina d'Ampezzo", country: 'Italy' },
	{ name: 'Garmisch-Partenkirchen', country: 'Germany' },
	{ name: 'Tignes', country: 'France' },
	{ name: 'Meiringen-Hasliberg', country: 'Switzerland' },
	{ name: 'Madonna di Campiglio', country: 'Italy' },
	{ name: 'Les Deux Alpes', country: 'France' },
	{ name: 'Obergurgl-Hochgurgl', country: 'Austria' },
	{ name: 'Andermatt', country: 'Switzerland' },
	{ name: 'Wengen', country: 'Switzerland' },
	{ name: 'Chamrousse', country: 'France' },
	{ name: 'Bad Gastein', country: 'Austria' },
	{ name: 'La Plagne', country: 'France' },
	{ name: 'Nassfeld', country: 'Austria' },
	{ name: 'Pila', country: 'Italy' },
	{ name: 'Stubaier Gletscher', country: 'Austria' },
	{ name: 'Les Arcs', country: 'France' },
	{ name: 'Val Thorens', country: 'France' },
	{ name: 'Garmisch Classic', country: 'Germany' },
	{ name: 'Montgenèvre', country: 'France' }
];

export const daisyBgColors = [
	'default',
	'neutral',
	'primary',
	'secondary',
	'accent',
	'info',
	'success',
	'warning',
	'error',
	'ghost'
];
export const daisyContentColors = daisyBgColors.map((x) => `${x}-content`);
