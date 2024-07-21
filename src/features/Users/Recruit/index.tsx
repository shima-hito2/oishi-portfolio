import { Box, Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Recruit = () => {
	return (
		<>
			<Container>
				<Box sx={{ textAlign: 'center', my: 2, py: 2, width: '100%' }}>
					<Typography sx={{ fontSize: 28 }}>採用情報</Typography>
					<Typography sx={{ fontSize: 16 }}>Recruit</Typography>
					<hr />
				</Box>
				<Outlet />
			</Container>
		</>
	);
};
