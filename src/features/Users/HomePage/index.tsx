import { Container } from '@mui/material';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/HPHeader';

export const HomePage: FC = () => {
	return (
		<>
			<Header title='パンパカパーン' />

			<Container>
				<Outlet />
			</Container>
		</>
	);
};
