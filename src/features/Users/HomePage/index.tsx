import { Container } from '@mui/material';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../../components/HPFooter';
import { Header } from '../../../components/HPHeader';

export const themeColor = '#9F764A';

export const HomePage: FC = () => {
	return (
		<>
			<Header title='パンパカパーン' />

			<Container>
				<Outlet />
			</Container>

			<Footer title='パンパカパーン' />

		</>
	);
};
