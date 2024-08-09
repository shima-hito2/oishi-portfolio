import type { FC } from 'react';
import { HeaderSwither } from '../../../components/ECHeader/HeaderSwitcher';
import { Footer } from '../../../components/ECSite/footer';

export const ECSite: FC = () => {
	return (
		<>
			<HeaderSwither />
			<Footer title='ECサイト' />
		</>
	);
};
