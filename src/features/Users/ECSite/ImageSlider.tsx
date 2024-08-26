import { Box, Container } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { getImage } from '../../../getImagePath';

const items = [
	{
		src: getImage('ECSite/image1.png'),
		alt: 'Image 1',
	},
	{
		src: getImage('ECSite/image2.png'),
		alt: 'Image 2',
	},
	{
		src: getImage('ECSite/image3.png'),
		alt: 'Image 3',
	},
];

export const ImageSlider: React.FC = () => {
	return (
		<Container sx={{ mt: 4, mb: 4, p: 0 }}>
			<Carousel
				indicators={true}
				navButtonsAlwaysVisible={true}
				autoPlay={true}
				animation='slide'
				interval={3000}
			>
				{items.map((item, index) => (
					<Box
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						display='flex'
						justifyContent='center'
						alignItems='center'
					>
						<img
							src={item.src}
							alt={item.alt}
							style={{
								width: '100%',
								maxHeight: '500px',
								objectFit: 'cover',
							}}
						/>
					</Box>
				))}
			</Carousel>
		</Container>
	);
};
