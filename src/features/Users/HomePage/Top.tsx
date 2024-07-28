import { Container } from '@mui/material';
import type { FC } from 'react';
import { ImageSlider } from './ImageSlider';
import { MainContainer } from './MainContainer';
import { News } from './News';
import { OtherItems } from './OtherItems';

export const Top: FC = () => {
	return (
		<>
			<Container>
				<ImageSlider />
				<MainContainer />
				<OtherItems />
				<News />
			</Container>
		</>
	);
};
