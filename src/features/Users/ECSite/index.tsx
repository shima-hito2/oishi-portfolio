import { Container, Grid } from '@mui/material';
import type { FC } from 'react';
import { CategoryCard } from '../../../components/ECSite/CategoryCard';
import { ImageSlider } from '../../../components/ECSite/ImageSlider';
import { Notifications } from '../../../components/ECSite/Notifications';
import { Footer } from '../../../components/ECSite/footer';
import { Header } from '../../../components/ECSite/header';
import { categories } from '../../../data/ECSite/categories';

export const ECSite: FC = () => {
	return (
		<>
			<Header title='ECサイト' />
			<ImageSlider />
			<Container>
				<Notifications />
				<Grid container spacing={2} justifyContent='center'>
					{categories.map((category, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Grid item xs={12} sm={6} md={4} key={index}>
							<CategoryCard {...category} />
						</Grid>
					))}
				</Grid>
			</Container>
			<Footer title='ECサイト' />
		</>
	);
};
