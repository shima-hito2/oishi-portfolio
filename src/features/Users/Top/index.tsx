import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { getImage } from '../../../getImagePath';

export const Top: FC = () => {
	return (
		<>
			<Box
				sx={{
					height: '100vh',
					width: '100%',
					mt: -8,
					position: 'relative',
				}}
			>
				<img
					src={getImage('view1.jpg')}
					alt='view1'
					className='top-image'
				/>
				<img
					src={getImage('view2.jpg')}
					alt='view1'
					className='top-image'
				/>
				<img
					src={getImage('view3.jpg')}
					alt='view1'
					className='top-image'
				/>
				<img
					src={getImage('view4.jpg')}
					alt='view1'
					className='top-image'
				/>
				<img
					src={getImage('view5.jpg')}
					alt='view1'
					className='top-image'
				/>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translateY(-50%) translateX(-50%)',
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '60px',
							color: '#FFF',
						}}
					>
						タイトル
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
						}}
					>
						-サブタイトル-
					</Typography>
				</Box>
				<Box sx={{ height: '100vh' }} />
				<Box
					sx={{
						width: '100%',
						backgroundColor: '#000',
						py: 20,
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						あなたを詐欺罪と器物損壊罪で訴えます！
					</Typography>
				</Box>
				<Box
					sx={{
						width: '100%',
						backgroundColor: '#00000050',
						py: 20,
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						理由はもちろんお分かりですね？あなたが皆をこんなウラ技で騙し、セーブデータを破壊したからです！
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						覚悟の準備をしておいて下さい。
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						ちかいうちに訴えます。裁判も起こします。裁判所にも問答無用できてもらいます。
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						慰謝料の準備もしておいて下さい！
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						貴方は犯罪者です！
					</Typography>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						刑務所にぶち込まれる楽しみにしておいて下さい！いいですね！
					</Typography>
				</Box>
				<Box sx={{ width: '100%', py: 20, textAlign: 'center' }}>
					<Typography
						sx={{
							fontSize: '20px',
							color: '#FFF',
							py: 5,
						}}
					>
						フリースペース
					</Typography>
				</Box>
			</Box>
		</>
	);
};
