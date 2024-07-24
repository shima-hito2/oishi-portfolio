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
import { Link, useNavigate } from 'react-router-dom';

type Props = {
	title: string;
};

export const Header: FC<Props> = (props: Props) => {
	const { title } = props;

	const navigate = useNavigate();

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
			<AppBar
				sx={{
					position: 'fixed',
					color: '#FFF',
					backgroundColor: '#fff0',
					boxShadow: 'none',
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='a'
							onClick={() => {
								navigate('/');
							}}
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								letterSpacing: '.3rem',
								color: '#FFF',
								textDecoration: 'none',
								cursor: 'pointer',
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
								sx={{ color: '#FFF' }}
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
									<Link to='/news/list'>お知らせ</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/recruit/list'>採用情報</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/home-page'>ホームページ</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>ECサイト</Link>
								</MenuItem>
							</Menu>
						</Box>
						<Typography
							variant='h5'
							noWrap
							component='a'
							onClick={() => {
								navigate('/');
							}}
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								letterSpacing: '.3rem',
								color: '#FFF',
								textDecoration: 'none',
								cursor: 'pointer',
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
									color: '#FFF',
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
								to='/news/list'
								style={{
									color: '#FFF',
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
								to='/recruit/list'
								style={{
									color: '#FFF',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								採用情報
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/home-page'
								style={{
									color: '#FFF',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								ホームページ
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/ec-site'
								style={{
									color: '#FFF',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
								}}
							>
								ECサイト
							</Link>
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0, color: '#FFF' }}
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
			<Box sx={{ height: 64, width: '100%' }} />
		</>
	);
};
