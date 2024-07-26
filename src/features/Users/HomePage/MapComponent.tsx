import type { FC } from 'react';

export const MapComponent: FC = () => {
	return (
		<>
			{/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<iframe src="https://maps.google.co.jp/maps?output=embed&q=嵜本 ベーカリーカフェ"
				style={{ width: 800, height: 600, marginBottom: 40 }}
			></iframe>
		</>
	);
};
