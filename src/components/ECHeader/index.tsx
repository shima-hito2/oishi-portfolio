import { Menu as MenuIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	Link,
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
import { useLocation } from 'react-router-dom';
import { AccountDialog } from '../../features/Users/ECSite/AccountDialog';

type Props = {
	children: ReactNode;
	href: string;
	sx?: SxProps<Theme>;
};

const CustomLink: FC<Props> = (props: Props) => {
	const { children, href } = props;
	const location = useLocation();
	const isActive = location.pathname === href;
	return (
		<Link
			href={href}
			sx={{
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
			}}
			className={isActive ? 'active' : ''}
		>
			{children}
		</Link>
	);
};

const CustomInfoLink: FC<Props> = (props: Props) => {
	const { children, href } = props;
	return (
		<Link
			href={href}
			sx={{
				display: 'flex',
				alignItems: 'center',
				textDecoration: 'none',
				color: '#666',
				fontSize: '14px',
			}}
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
								<ListItem component='a' href='/ec-site'>
									<ListItemText primary='ホーム' />
								</ListItem>
								<ListItem component='a' href='/ec-site/news'>
									<ListItemText primary='お知らせ' />
								</ListItem>
								<ListItem component='a' href='/ec-site/product'>
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
						<CustomLink href='/ec-site'>ホーム</CustomLink>
						<CustomLink href='/ec-site/news'>お知らせ</CustomLink>
						<CustomLink href='/ec-site/product'>
							商品一覧
						</CustomLink>
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
