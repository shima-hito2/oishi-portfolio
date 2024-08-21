import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import type { FC } from 'react';

type Props = {
	title: string;
	description: string;
	items: {
		title: string;
		price?: string;
		image: string;
	}[];
};

export const ItemList: FC<Props> = (props: Props) => {
	const { title, description, items } = props;
	return (
		<>
			<Box sx={{ padding: '20px' }}>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					{description}
				</Typography>
				<Grid container spacing={2}>
					{items.map((item, index) => (
						<Grid item xs={12} sm={6} md={3} key={index}>
							<Card>
								<CardMedia
									component='img'
									height='140'
									image={item.image}
									alt={item.title}
								/>
								<CardContent>
									<Typography variant='h6'>
										{item.title}
									</Typography>
									{item.price && (
										<Typography variant='body2'>
											{item.price}
										</Typography>
									)}
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
				<Box sx={{ textAlign: 'right', marginTop: '10px' }}>
					<Link href='#' variant='body2'>
						もっと見る &gt;
					</Link>
				</Box>
			</Box>
		</>
	);
};
