import { Box, Button, Typography } from '@mui/material';
import type { FC } from 'react';
import { themeColor } from '.';
import { getImage } from '../../../getImagePath';

export const News: FC = () => {
	const items = [
		{
			id: 1,
			imgPath: getImage('image1.png'),
			date: '2024/07/25',
			content:
				'【嵜本珈琲】8月1日(木)より、どっしりとした苦みとコク、すっきりとしたアフターテイストのシーズナルブレンドが登場します。',
		},
		{
			id: 1,
			imgPath: getImage('image2.png'),
			date: '2024/07/25',
			content:
				'8月1日(木)より、8月限定『ふんわり香る桃の食パン』が新登場。',
		},
		{
			id: 1,
			imgPath: getImage('image3.png'),
			date: '2024/07/25',
			content:
				'8月1日(木)より、8月限定『ふんわり香る桃の食パン』が新登場。',
		},
	];

	return (
		<>
			<Box sx={{ width: '100%', color: themeColor, textAlign: 'center' }}>
				<Typography sx={{ fontSize: 40 }}>ニュース</Typography>
			</Box>

			<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
				{/* データ取得の際に2件に絞る想定 */}
				<Box sx={{ width: '40%', display: 'flex' }}>
					<Box
						component={'img'}
						src={items[0].imgPath}
						sx={{ width: '50%', mr: 2 }}
					/>
					<Box>
						<Typography
							sx={{ color: themeColor, textWrap: 'nowrap' }}
						>
							New {items[0].date}/IMFORMATION
						</Typography>
						<Typography>{items[0].content}</Typography>
					</Box>
				</Box>
				<Box sx={{ width: '40%', display: 'flex' }}>
					<Box
						component={'img'}
						src={items[1].imgPath}
						sx={{ width: '50%', mr: 2 }}
					/>
					<Box>
						<Typography
							sx={{ color: themeColor, textWrap: 'nowrap' }}
						>
							New {items[1].date}/IMFORMATION
						</Typography>
						<Typography>{items[1].content}</Typography>
					</Box>
				</Box>
			</Box>

			<Box sx={{ textAlign: 'center', my: 2 }}>
				<Button
					sx={{
						borderRadius: 0,
						backgroundColor: themeColor,
						color: '#FFF',
						m: '0 auto',
						width: '20%',
					}}
				>
					もっと見る
				</Button>
			</Box>
		</>
	);
};
