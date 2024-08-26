import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderSwither } from '../../../components/ECHeader/HeaderSwitcher';
import { Footer } from '../../../components/ECSite/footer';

export const ECSite: FC = () => {
	return (
		<>
			<HeaderSwither />
			<main style={{ maxWidth: '1024px', margin: 'auto' }}>
				<Outlet />
			</main>
			<Footer title='ECサイト' />
		</>
	);
};
