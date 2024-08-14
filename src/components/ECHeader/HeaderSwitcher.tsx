import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './index';
import { Header2 } from './index2';

export const HeaderSwither: FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const headerType = params.get('header');

	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	let HeaderComponent;

	switch (headerType) {
		case '1':
			HeaderComponent = Header;
			break;
		case '2':
			HeaderComponent = Header2;
			break;
		default:
			HeaderComponent = Header;
			break;
	}

	return <HeaderComponent title={'ECサイト'} />;
};
