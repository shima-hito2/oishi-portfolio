import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

type CategoryCardProps = {
	title: string;
	subtitle: string;
	imageUrl: string;
	link: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
	title,
	subtitle,
	imageUrl,
	link,
}) => {
	return (
		<Card>
			<CardActionArea component={Link} to={link}>
				<CardMedia
					component='img'
					alt={title}
					height='200'
					image={imageUrl}
					title={title}
				/>
				<CardContent sx={{ position: 'relative', p: 0 }}>
					<Box
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							bgcolor: 'rgba(0, 0, 0, 0.7)',
							color: 'white',
							p: 1,
							textAlign: 'center',
						}}
					>
						<Typography variant='h6'>{title}</Typography>
						<Typography variant='body2'>{subtitle}</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
