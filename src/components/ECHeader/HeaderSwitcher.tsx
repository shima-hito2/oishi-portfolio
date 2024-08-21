import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './index';
import { Header2 } from './index2';

export const HeaderSwither: FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const headerType = params.get('header') ?? '';

	return (
		<>
			{headerType === '1' && <Header />}
			{headerType === '2' && <Header2 title={'ECサイト'} />}
			{headerType !== '1' && headerType !== '2' && <Header />}
		</>
	);
};
