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
import { themeColor } from '../../features/Users/HomePage';

type Props = {
	title: string;
};

export const Header: FC<Props> = (props: Props) => {
	const { title } = props;

	const navigate = useNavigate();

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<>
			<AppBar
				sx={{
					position: 'fixed',
					color: themeColor,
					backgroundColor: '#FFFFFF',
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
								navigate('/home-page');
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
								sx={{ color: themeColor }}
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
									<Link to='/home-page/news'>ニュース</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/home-page/access'>アクセス</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/home-page/column'>コラム</Link>
								</MenuItem>
								<MenuItem onClick={handleCloseNavMenu}>
									<Link to='/home-page/faq'>よくあるご質問</Link>
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
								to='/home-page/news'
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
								to='/home-page/access'
								style={{
									color: themeColor,
									fontSize: '14px',
									padding: '6px 8px',
									textDecorationLine: 'none',
									width: '8%',
									textAlign: 'center',
								}}
							>
								アクセス
							</Link>
							<Link
								onClick={() => {
									setAnchorElNav(null);
								}}
								to='/home-page/column'
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
								to='/home-page/faq'
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
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box sx={{ height: 90, width: '100%' }} />
		</>
	);
};
