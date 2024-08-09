import { Container } from '@mui/material';
import type { FC } from 'react';
import { Menu } from './MainContainer';
import { StoryContainer } from './StoryContainer';

export const Top: FC = () => {
	return (
		<>
			<StoryContainer />
			<Container>
				<Menu />
			</Container>
		</>
	);
};
