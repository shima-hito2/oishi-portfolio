import { Menu as MenuIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	type SxProps,
	type Theme,
	Toolbar,
} from '@mui/material';
import {
	type FC,
	type KeyboardEvent,
	type MouseEvent,
	type ReactNode,
	useState,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AccountDialog } from '../../features/Users/ECSite/AccountDialog';

type Props = {
	children: ReactNode;
	to: string;
	sx?: SxProps<Theme>;
};

const CustomLink: FC<Props> = (props: Props) => {
	const { children, to } = props;
	const location = useLocation();
	const isActive = location.pathname === to;
	return (
		<Link
			to={to}
			style={{
				textDecoration: 'none',
				color: 'black',
				fontWeight: 'bold',
				borderBottom: isActive ? '2px solid red' : 'none',
				transition: 'color 0.2s',
			}}
			className={isActive ? 'active' : ''}
		>
			{children}
		</Link>
	);
};

export const Header: FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [accountOpen, setAccountOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) => (event: KeyboardEvent | MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as KeyboardEvent).key === 'Tab' ||
					(event as KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawerOpen(open);
		};

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
						sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor='left'
						open={drawerOpen}
						onClose={toggleDrawer(false)}
					>
						<Box
							sx={{ width: 250 }}
							role='presentation'
							onClick={toggleDrawer(false)}
							onKeyDown={toggleDrawer(false)}
						>
							<List>
								<ListItem
									component={Link}
									to='/ec-site'
									sx={{
										textDecoration: 'none',
										color: 'black',
									}}
								>
									<ListItemText primary='ホーム' />
								</ListItem>
								<ListItem
									component={Link}
									to='/ec-site/news'
									sx={{
										textDecoration: 'none',
										color: 'black',
									}}
								>
									<ListItemText primary='お知らせ' />
								</ListItem>
								<ListItem
									component={Link}
									to='/ec-site/product'
									sx={{
										textDecoration: 'none',
										color: 'black',
									}}
								>
									<ListItemText primary='商品一覧' />
								</ListItem>
							</List>
						</Box>
					</Drawer>
					<Box
						component='nav'
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: '20px',
							ml: 3,
						}}
					>
						<CustomLink to='/ec-site'>ホーム</CustomLink>
						<CustomLink to='/ec-site/news'>お知らせ</CustomLink>
						<CustomLink to='/ec-site/product'>商品一覧</CustomLink>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', gap: '15px' }}>
					<Button
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textDecoration: 'none',
							color: '#666',
							fontSize: '14px',
						}}
						onClick={() => {
							setAccountOpen(true);
						}}
					>
						<AccountCircleIcon />
						アカウント
					</Button>
					<Button
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textDecoration: 'none',
							color: '#666',
							fontSize: '14px',
						}}
					>
						<ShoppingCartIcon />
						カート
					</Button>
				</Box>
			</Toolbar>
			<AccountDialog
				accountOpen={accountOpen}
				setAccountOpen={setAccountOpen}
			/>
		</AppBar>
	);
};
