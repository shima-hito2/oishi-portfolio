import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { getImage } from '../../../getImagePath';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath: getImage('homePage/image1.png'),
	},
	{
		label: 'Bird',
		imgPath: getImage('homePage/image2.png'),
	},
	{
		label: 'Bali, Indonesia',
		imgPath: getImage('homePage/image3.png'),
	},
	{
		label: 'Goč, Serbia',
		imgPath: getImage('homePage/image4.png'),
	},
	{
		label: 'Goč, Serbia2',
		imgPath: getImage('homePage/image5.png'),
	},
];

export const ImageSlider: FC = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const themeColor = '#9F764A';

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};
	return (
		<Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
				}}
			/>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component='img'
								sx={{
									height: 510,
									display: 'block',
									maxWidth: 800,
									overflow: 'hidden',
									width: '100%',
									margin: '0 auto',
								}}
								src={step.imgPath}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				sx={{
					'.css-26w9jf-MuiMobileStepper-dot': {
						backgroundColor: themeColor,
					},
				}}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
						sx={{ color: themeColor }}
					>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={handleBack}
						disabled={activeStep === 0}
						sx={{ color: themeColor }}
					>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
					</Button>
				}
			/>
		</Box>
	);
};
