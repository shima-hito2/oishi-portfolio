import { Box, Button, Container, Typography } from '@mui/material';
import type { FC } from 'react';
import { themeColor } from '.';

export const Menu: FC = () => {
	return (
		<>
			<Container sx={{ textAlign: 'center', color: themeColor }}>

				{/* MENU情報 */}
				<Box>
					<Box sx={{ py: 1, px: 20, border: '1px solid #000', color: '#000' }}>
						<Typography>
							MORNING MENU / 9:00-11:00
						</Typography>
					</Box>
					<Button variant='text'>PDFモーニングメニューをダウンロード</Button>
					<Box sx={{ py: 1, px: 20, border: '1px solid #000', color: '#000' }}>
						<Typography>
							CUSTOMIZED TOAST / ALL TIME
						</Typography>
						<Typography>
							FOOD MENU / 11:00-15:00
						</Typography>
						<Typography>
							FOOD MENU / 11:00-15:00
						</Typography>
					</Box>
					<Button variant='text'>PDFメニューをダウンロード</Button>
					<Box sx={{ py: 1, px: 20, border: '1px solid #000', color: '#000' }}>
						<Typography>
							TAKE OUT MENU / 9:00-16:00
						</Typography>
					</Box>
					<Button variant='text'>PDFメニューをダウンロード</Button>
				</Box>

				{/* リンク */}
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
						オンラインストア
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
						パンのご予約
					</Box>
				</Box>
			</Container>
		</>
	);
};
