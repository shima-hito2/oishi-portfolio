import { Box, Container } from '@mui/material';
import type { FC } from 'react';
import { ImageSlider } from './ImageSlider';
import { MainContainer } from './MainContainer';
import { OtherItems } from './OtherItems';

export const Top: FC = () => {
	return (
		<>
			<Container>
				<ImageSlider />
				<MainContainer />
				<OtherItems />
				<Box sx={{ height: 700 }} />
			</Container>
		</>
	);
};
