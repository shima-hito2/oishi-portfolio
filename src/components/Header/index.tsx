import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
};

export const Header: FC<Props> = (props: Props) => {
	const { title } = props;

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='a'
							href='#app-bar-with-responsive-menu'
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							{title}
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon fontSize='large' />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/blog'>ブログ</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/news'>お知らせ</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/recruit'>採用情報</Link>
								</MenuItem>
							</Menu>
						</Box>
						<Typography
							variant='h5'
							noWrap
							component='a'
							href='#app-bar-with-responsive-menu'
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							{title}
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								alignItems: 'center',
							}}
						>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/blog'
								style={{
									color: 'white',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								ブログ
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/news'
								style={{
									color: 'white',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								お知らせ
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/recruit'
								style={{
									color: 'white',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								採用情報
							</Link>
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
								color='inherit'
								size='large'
							>
								<AccountCircle />
							</IconButton>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>
										ログアウト
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
