import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
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
import { themeColor } from '../../features/Users/HomePage';

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
					color: themeColor,
					backgroundColor: '#FFFFFF90',
					height: 90,
					width: '100%',
					textWrap: 'nowrap',
					whiteSpace: 'nowrap',
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar
						sx={{
							height: 90,
						}}
					>
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
								textDecoration: 'none',
								cursor: 'pointer',
								lineHeight: '90px',
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
									<Link to='/blog'>ニュース</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/news/list'>ストーリー</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/recruit/list'>嵜本のパン</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/home-page'>ショップ</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>コラム</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>よくあるご質問</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>採用情報</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>ストア</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/ec-site'>ご予約</Link>
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
								color: themeColor,
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
								justifyContent: 'flex-end',
							}}
						>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/blog'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								ニュース
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/news/list'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								ストーリー
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/recruit/list'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								嵜本のパン
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/home-page'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								ショップ
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/ec-site'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								コラム
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/ec-site'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								よくあるご質問
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/ec-site'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								採用情報
							</Link>
							<Button
								sx={{
									color: '#FFF',
									backgroundColor: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									borderRadius: 0,
									height: 90,
									width: '8%',
								}}
							>
								ストア
							</Button>
							<Button
								sx={{
									color: '#FFF',
									backgroundColor: '#B89A80',
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									borderRadius: 0,
									height: 90,
									width: '8%',
								}}
							>
								ご予約
							</Button>
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
			<Box sx={{ height: 90, width: '100%' }} />
		</>
	);
};
