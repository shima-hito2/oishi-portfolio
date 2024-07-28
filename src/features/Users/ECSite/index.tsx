import { Container, Grid, Typography } from '@mui/material';
import type { FC } from 'react';
import { CategoryCard } from '../../../components/ECSite/CategoryCard';
import { ImageSlider } from '../../../components/ECSite/ImageSlider';
import { Notifications } from '../../../components/ECSite/Notifications';
import { PopularItemCard } from '../../../components/ECSite/PopularItemCard';
import { Footer } from '../../../components/ECSite/footer';
import { Header } from '../../../components/ECSite/header';
import { categories } from '../../../data/ECSite/categories';
import { popularItems } from '../../../data/ECSite/popularItems';

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
				<Typography
					variant='h4'
					align='center'
					gutterBottom
					sx={{ mt: 4 }}
				>
					人気アイテム
				</Typography>
				<Grid
					container
					spacing={2}
					justifyContent='center'
					sx={{ marginBottom: '30px' }}
				>
					{popularItems.slice(0, 3).map(item => (
						<Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
							<PopularItemCard {...item} />
						</Grid>
					))}
					{popularItems.slice(3).map(item => (
						<Grid item xs={6} sm={3} md={2} lg={2} key={item.id}>
							<PopularItemCard {...item} />
						</Grid>
					))}
				</Grid>
			</Container>
			<Footer title='ECサイト' />
		</>
	);
};
