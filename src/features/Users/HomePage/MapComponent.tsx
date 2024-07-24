import type { FC } from 'react';

export const MapComponent: FC = () => {
	return (
		<>
			{/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<iframe
				src='https://www.google.com/maps/embed?
pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.76493611522864!3d35
.68124053757879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2
!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2
!1sja!2sjp!4v1594286431753!5m2!1sja!2sjp'
				aria-hidden='false'
			></iframe>
		</>
	);
};
