import { Box } from '@mui/material';
import type { FC } from 'react';
import { items } from './DummyData';
import { RecruitItems } from './RecruitItems';

export const RecruitList: FC = () => {
	return (
		<>
			<Box
				sx={{
					display: { md: 'grid' },
					justifyContent: { md: 'space-between' },
					flexWrap: 'wrap',
					gridTemplateColumns: { md: '1fr 1fr' },
				}}
			>
				{items.map(item => (
					<RecruitItems key={item.id} item={item} />
				))}
			</Box>
		</>
	);
};
