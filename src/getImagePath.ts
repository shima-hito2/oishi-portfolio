export const getImage = (fileName: string): string => {
	return import.meta.env.MODE === 'production'
		? `images/${fileName}`
		: `../../oishi-portfolio/public/images/${fileName}`;
};
