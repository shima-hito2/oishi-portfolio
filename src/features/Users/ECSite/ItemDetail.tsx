import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
	description: string;
	items: {
		to: string;
		title: string;
		price: string;
		image: string;
	}[];
};

export const ItemDetail: FC<Props> = (props: Props) => {
	const { title, description, items } = props;
	const waveSvg = `data:image/svg+xml;base64,${btoa(`
		<svg width="100%" height="500px" xmlns="http://www.w3.org/2000/svg" version="1.1">
			<path d="M 0 80 Q 75 160 150 80 T 300 80 T 450 80 T 600 80 T 750 80 T 900 80 T 1050 80 T 1200 80 T 1350 80 T 1500 80 L 1500 0 L 0 0 Z" fill="#FFFFFF" />
		</svg>
	`)}`;

	return (
		<>
			<Box
				sx={{
					backgroundColor: '#F0F0F0',
					padding: '20px',
					overflow: 'hidden',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundImage: `url(${waveSvg})`,
						backgroundSize: 'cover',
						zIndex: 1,
					}}
				/>
				<Box
					sx={{
						position: 'relative',
						zIndex: 2,
						paddingTop: '80px',
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
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Grid item key={index} xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea>
										<CardMedia
											component='img'
											height='140'
											image={item.image}
										/>
										<CardContent>
											<Typography
												variant='h6'
												gutterBottom
											>
												{item.title}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
											>
												{item.price}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Link to={item.to}>
											<Button
												size='small'
												color='primary'
											>
												詳細を見る
											</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
};
