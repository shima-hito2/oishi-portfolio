import { Box, Container } from '@mui/material';
import { Header } from '../../components/Header';
import { Link } from 'react-router-dom';

export const Page = () => {
	return (
		<>
			<Header title='管理画面' />
			<Container maxWidth='xl'>
				<Box sx={{ mt: 4 }}>管理画面の内容</Box>
				<Link to='/'>一般画面へ</Link>
			</Container>
		</>
	);
};
