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

	const waveSvg = `data:image/svg+xml;base64,${btoa(`
        <svg width="100%" height="350px" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <path d="M 0 30 Q 50 60 100 30 T 200 30 T 300 30 T 400 30 T 500 30 T 600 30 T 700 30 T 800 30 T 900 30 T 1000 30 T 1100 30 T 1200 30 T 1300 30 T 1400 30 T 1500 30 L 1500 0 L 0 0 Z" fill="#f2f2f2" />
        </svg>
    `)}`;
	return (
		<>
			<Box
				sx={{
					padding: '20px',
					backgroundImage: `url(${waveSvg})`,
				}}
			>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					{description}
				</Typography>
				<Grid container spacing={2}>
					{items.map((item, index) => (
						<Grid item xs={6} sm={3} md={3} key={index}>
							<Card>
								<CardMedia
									component='img'
									height='80'
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
