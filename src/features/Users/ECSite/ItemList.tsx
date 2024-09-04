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
	href?: string;
};

export const ItemList: FC<Props> = (props: Props) => {
	const { title, description, items, href } = props;

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
						backgroundSize: 'cover', // 背景画像を全体にフィットさせる
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
						<Link href={href} variant='body2'>
							もっと見る &gt;
						</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};
