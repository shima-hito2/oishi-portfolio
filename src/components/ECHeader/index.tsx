import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import type React from 'react';

export const Header: React.FC = () => {
	return (
		<AppBar
			position='static'
			color='transparent'
			elevation={0}
			sx={{ borderBottom: '1px solid #ddd' }}
		>
			<Toolbar sx={{ justifyContent: 'space-between', padding: '10px' }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<img
							src='/path/to/logo.png'
							alt='Logo'
							style={{ width: '40px' }}
						/>
					</IconButton>
					<Box
						component='nav'
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: '20px',
							ml: 3,
						}}
					>
						<Link href='#' sx={linkStyle} className='active'>
							ホーム
						</Link>
						<Link href='#' sx={linkStyle}>
							メニュー
						</Link>
						<Link href='#' sx={linkStyle}>
							キャンペーン
						</Link>
						<Link href='#' sx={linkStyle}>
							ファミリー
						</Link>
						<Link href='#' sx={linkStyle}>
							サステナビリティ
						</Link>
						<Link href='#' sx={linkStyle}>
							お店・サービス
						</Link>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: '15px' }}>
					<Link href='#' sx={infoLinkStyle}>
						採用情報
					</Link>
					<Link href='#' sx={infoLinkStyle}>
						公式アプリ
					</Link>
					<Link href='#' sx={infoLinkStyle}>
						検索
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

const linkStyle = {
	textDecoration: 'none',
	color: 'black',
	fontWeight: 'bold',
	'&:hover': {
		color: 'red',
		borderBottom: '2px solid red',
	},
	'&.active': {
		color: 'red',
		borderBottom: '2px solid red',
	},
};

const infoLinkStyle = {
	textDecoration: 'none',
	color: '#666',
	fontSize: '14px',
};

export default Header;
