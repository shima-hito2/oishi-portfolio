import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/HPHeader';

export const HomePage = () => {
	return (
		<>
			<Header title='aaa' />

			<Container>
				<Box>ホームページ</Box>
				<Outlet />
			</Container>
		</>
	);
};
