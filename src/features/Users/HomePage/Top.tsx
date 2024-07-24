import { Container } from '@mui/material';
import type { FC } from 'react';
import { ImageSlider } from './ImageSlider';
import { MainContainer } from './MainContainer';

export const Top: FC = () => {
	return (
		<>
			<Container>
				<ImageSlider />
				<MainContainer />
			</Container>
		</>
	);
};
