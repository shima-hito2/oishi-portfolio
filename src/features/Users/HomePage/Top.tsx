import { Container } from '@mui/material';
import type { FC } from 'react';
import { ImageSlider } from './ImageSlider';
import { Menu } from './MainContainer';
import { StoryContainer } from './StoryContainer';

export const Top: FC = () => {
	return (
		<>
			<StoryContainer />
			<Container>
				<ImageSlider />
				<Menu />
			</Container>
		</>
	);
};
