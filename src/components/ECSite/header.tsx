import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// src/components/ECSite/header.tsx
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawerOpen(open);
		};

	const drawerContent = (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem component={Link} to='/ec-site/account'>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary='マイアカウント' />
				</ListItem>
				<ListItem component={Link} to='/ec-site/contact'>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText primary='お問い合わせ' />
				</ListItem>
				<ListItem component={Link} to='/ec-site/cart'>
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary='カート' />
				</ListItem>
			</List>
		</Box>
	);

	return (
		<AppBar position='static' color='transparent' elevation={0}>
			<Toolbar>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					width='100%'
				>
					{/* 左側のお知らせ */}
					{!isMobile && (
						<Button variant='outlined' color='primary' size='small'>
							1,000円以上のお買い上げで送料無料
						</Button>
					)}

					{/* 中央のロゴ */}
					<Typography variant='h6'>{title}</Typography>

					{/* 右側のナビゲーションアイコン */}
					<Box display='flex' alignItems='center'>
						{isMobile ? (
							<>
								<IconButton
									color='inherit'
									onClick={toggleDrawer(true)}
								>
									<MenuIcon />
								</IconButton>
								<Drawer
									anchor='right'
									open={drawerOpen}
									onClose={toggleDrawer(false)}
								>
									{drawerContent}
								</Drawer>
							</>
						) : (
							<>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='center'
									mx={1}
								>
									<IconButton
										color='inherit'
										component={Link}
										to='/ec-site/account'
									>
										<PersonIcon />
									</IconButton>
									<Typography variant='body2'>
										マイアカウント
									</Typography>
								</Box>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='center'
									mx={1}
								>
									<IconButton
										color='inherit'
										component={Link}
										to='/ec-site/contact'
									>
										<InfoIcon />
									</IconButton>
									<Typography variant='body2'>
										お問い合わせ
									</Typography>
								</Box>
								<Box
									display='flex'
									flexDirection='column'
									alignItems='center'
									mx={1}
								>
									<IconButton
										color='inherit'
										component={Link}
										to='/ec-site/cart'
									>
										<ShoppingCartIcon />
									</IconButton>
									<Typography variant='body2'>
										カート
									</Typography>
								</Box>
							</>
						)}
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
