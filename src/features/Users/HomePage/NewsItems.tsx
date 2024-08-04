import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { themeColor } from '.';
import { dateToString } from '../../../time';

type Props = {
	item: {
		id: string;
		imgPath: string;
		datetime: string;
		title: string;
		detail: string;
	};
};

export const NewsItems: FC<Props> = (props: Props) => {
	const { item } = props;
	const navigate = useNavigate();
	return (
		<>
			<Box
				sx={{
					width: {
						xs: '100%',
						md: '30%',
					},
					mb: 4,
					cursor: 'pointer',
					transition: '0.4s',
					boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.3)',
					'&:hover': {
						filter: 'opacity(80%)',
					},
					color: themeColor,
				}}
				onClick={() => {
					navigate(`/news/item/${item.id}`);
				}}
			>
				<img
					style={{ width: '100%' }}
					src={item.imgPath}
					alt={item.imgPath}
				/>
				<Typography>
					{dateToString(item.datetime, 'YYYY/MM/DD')}
				</Typography>
				<Typography>{item.title}</Typography>
			</Box>
		</>
	);
};
