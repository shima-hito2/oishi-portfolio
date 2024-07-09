import { Container } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Page = () => {
	const navigate = useNavigate();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		navigate('blog');
	}, []);
	return (
		<>
			<Header title='ほげほげ' />
			<Container>
				{/* <Box sx={{ mt: 4 }}>一般の内容</Box>
                <Link to='/admin'>管理画面へ</Link> */}
				<Outlet />
			</Container>
		</>
	);
};
