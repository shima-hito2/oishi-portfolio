import { Container } from '@mui/material';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../../components/HPFooter';
import { Header } from '../../../components/HPHeader';
import { News } from './News';
import { OtherItems } from './OtherItems';

export const themeColor = '#9F764A';

export const HomePage: FC = () => {
	return (
		<>
			<Header title='パンパカパーン' />

			<Container>
				<Outlet />
			</Container>

			<OtherItems />
			<News />
			<Footer />

		</>
	);
};
