import { Box, Container, Typography } from '@mui/material';
import type { FC } from 'react';
import { MapComponent } from './MapComponent';

export const MainContainer: FC = () => {
	const themeColor = '#9F764A';
	return (
		<>
			<Container sx={{ textAlign: 'center', color: themeColor }}>
				<Typography>shop</Typography>
				<Typography>ベーカリーカフェ 大阪初號本店</Typography>

				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
					<Box
						sx={{
							color: '#FFF',
							fontWeight: 'bold',
							px: 2,
							py: 1,
							backgroundColor: themeColor,
						}}
					>
						カフェ
					</Box>
					<Box
						sx={{
							color: '#FFF',
							fontWeight: 'bold',
							px: 2,
							py: 1,
							backgroundColor: themeColor,
						}}
					>
						テイクアウト
					</Box>
					<Box
						sx={{
							color: '#FFF',
							fontWeight: 'bold',
							px: 2,
							py: 1,
							backgroundColor: themeColor,
						}}
					>
						モーニング
					</Box>
				</Box>

				<Box sx={{ textAlign: 'left', width: '60%', mx: 'auto' }}>
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ width: '30%' }}>
							<Typography>Address</Typography>
						</Box>
						<Box sx={{ width: '70%' }}>
							<Typography>
								大阪市浪速区難波中2-3-18 2階
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ width: '30%' }}>
							<Typography>Tel</Typography>
						</Box>
						<Box sx={{ width: '70%' }}>
							<Typography>06-6634-6900</Typography>
						</Box>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<Box sx={{ width: '30%' }}>
							<Typography>Open</Typography>
						</Box>
						<Box sx={{ width: '70%' }}>
							<Typography>
								平日 9:00 - 18:00 (17:00 last order) 土日祝 9:00
								- 19:00 (18:00 last order)
								イートインフード（デザート・ドリンク以外全て）のご提供時間を15:00までとさせていただきます。
								Eat-in meals (excluding dessert) will be served
								until 3 pm.
								ご予約は前日までに、店舗へ直接お電話をお願いいたします。
								ランチタイムのご予約のみ承ります。 For
								reservations, please call the cafe directly at
								least one day in advance. We only accept
								reservations for lunch time.
							</Typography>
						</Box>
					</Box>
				</Box>
				<MapComponent />
			</Container>
		</>
	);
};
