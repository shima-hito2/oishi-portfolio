import { Box } from '@mui/material';
import type { FC } from 'react';
import { NewsItems } from '../HomePage/NewsItems';
import { items } from './DummyData';

export const NewsList: FC = () => {
	return (
		<>
			<Box
				sx={{
					display: { md: 'flex' },
					justifyContent: { md: 'space-between' },
					flexWrap: 'wrap',
					color: '#FFF',
				}}
			>
				{items.map(item => (
					<NewsItems key={item.id} item={item} />
				))}
			</Box>
		</>
	);
};
