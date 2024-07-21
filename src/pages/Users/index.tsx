import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Page = () => {
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	navigate('blog');
	// }, []);
	return (
		<>
			<Header title='ほげほげ' />
			<Outlet />
		</>
	);
};
