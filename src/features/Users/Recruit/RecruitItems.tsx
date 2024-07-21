import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { dateToString } from '../../../time';

type Props = {
	item: {
		id: string;
		imgPath: string;
		datetime: string;
		title: string;
		detail: string;
		salary: string;
		hours: string;
		benefits: string;
	};
};

export const RecruitItems: FC<Props> = (props: Props) => {
	const { item } = props;
	const navigate = useNavigate();
	return (
		<>
			<Box
				sx={{
					width: {
						xs: '100%',
						md: '50%',
						cursor: 'pointer',
						transition: '0.4s',
						'&:hover': {
							filter: 'opacity(80%)',
						},
					},
				}}
				onClick={() => {
					navigate(`/recruit/item/${item.id}`);
				}}
			>
				<img
					style={{ width: 'auto', height: '245px' }}
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
