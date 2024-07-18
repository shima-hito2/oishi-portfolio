import { Box, Button, Typography } from '@mui/material';
import type { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dateToString } from '../../../time';
import { items } from './DummyData';

export const NewsPage: FC = () => {
	const { id: itemId } = useParams();
	const item = items.find(obj => obj.id === itemId);

	const navigate = useNavigate();

	return (
		<Box>
			<Typography>
				{dateToString(item?.datetime ?? '', 'YYYY/MM/DD')}
			</Typography>
			<Typography sx={{ fontSize: 24, my: 2 }}>{item?.title}</Typography>
			<img
				style={{ width: '100%' }}
				src={`../../public/images/${item?.imgPath}`}
				alt={item?.imgPath}
			/>
			<Typography>{item?.detail}</Typography>
			<Box sx={{ textAlign: 'center' }}>
				<Button
					color='inherit'
					variant='outlined'
					size='large'
					sx={{
						borderRadius: 0,
						my: 5,
						width: '20%',
						height: 60,
						textWrap: 'nowrap',
						minWidth: 120,
					}}
					onClick={() => {
						navigate('/news/list');
					}}
				>
					View All
				</Button>
			</Box>
		</Box>
	);
};
