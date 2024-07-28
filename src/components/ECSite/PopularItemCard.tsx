// src/components/ECSite/PopularItemCard.tsx
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import type { FC } from 'react';

type PopularItemCardProps = {
	id: number;
	name: string;
	description: string;
	price: string;
	imageUrl: string;
};

export const PopularItemCard: FC<PopularItemCardProps> = ({
	id,
	name,
	description,
	price,
	imageUrl,
}) => {
	return (
		<Card
			sx={{
				height: id <= 3 ? '100%' : '80%',
				position: 'relative',
			}}
		>
			<CardActionArea
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<CardMedia
					component='img'
					alt={name}
					height={id <= 3 ? '200' : '100'}
					image={imageUrl}
					title={name}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography
						gutterBottom
						variant='h6'
						component='div'
						sx={{ fontSize: id <= 3 ? '1.25rem' : '1rem' }}
					>
						{name}
					</Typography>
					<Typography
						variant='body2'
						color='textSecondary'
						sx={{ fontSize: id <= 3 ? '1rem' : '0.875rem' }}
					>
						{description}
					</Typography>
					<Typography
						variant='body2'
						color='textSecondary'
						sx={{ fontSize: id <= 3 ? '1rem' : '0.875rem' }}
					>
						{price}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					bgcolor: id <= 3 ? 'primary.main' : 'grey.500',
					color: 'white',
					px: 1,
					py: 0.5,
					fontSize: '1rem',
					borderTopLeftRadius: '4px',
					borderBottomRightRadius: '4px',
				}}
			>
				{id}
			</Box>
		</Card>
	);
};
