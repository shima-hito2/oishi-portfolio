import { Box, Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/Header';

export const News = () => {
	return (
		<>
			<Header title='ポートフォリオ' />

			<Container>
				<Box
					sx={{
						textAlign: 'center',
						my: 2,
						py: 2,
						width: '100%',
						color: '#FFF',
					}}
				>
					<Typography sx={{ fontSize: 28 }}>お知らせ</Typography>
					<Typography sx={{ fontSize: 16 }}>NEWS</Typography>
					<hr />
				</Box>
				<Outlet />
			</Container>
		</>
	);
};
