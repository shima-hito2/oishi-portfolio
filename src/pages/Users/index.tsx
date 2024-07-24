// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const Page = () => {
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	navigate('top');
	// }, [navigate]);
	return (
		<>
			<Outlet />
		</>
	);
};
