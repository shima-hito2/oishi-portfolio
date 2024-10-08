import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
};
export const Footer: React.FC<Props> = ({ title }) => {
	return (
		<Box
			component='footer'
			sx={{
				bgcolor: 'background.paper',
				p: 2,
				borderTop: '1px solid #e0e0e0',
			}}
		>
			<Grid container justifyContent='space-between' alignItems='center'>
				<Grid item>
					<Typography variant='h6'>{title}</Typography>
				</Grid>
				<Grid item>
					<Box display='flex' alignItems='center'>
						<IconButton
							color='inherit'
							href='https://www.facebook.com'
							target='_blank'
						>
							<FacebookIcon />
						</IconButton>
						<IconButton
							color='inherit'
							href='https://www.instagram.com'
							target='_blank'
						>
							<InstagramIcon />
						</IconButton>
						<IconButton
							color='inherit'
							href='https://www.twitter.com'
							target='_blank'
						>
							<TwitterIcon />
						</IconButton>
					</Box>
				</Grid>
				<Grid item>
					<Box
						display='flex'
						justifyContent='flex-end'
						alignItems='center'
						gap={2}
					>
						<Link
							to={'/ec-site/contact'}
							style={{ color: '#000', textDecoration: 'none' }}
						>
							お問い合わせ
						</Link>
						<Typography variant='body2'>|</Typography>
						<Link
							to={'/ec-site/terms'}
							style={{ color: '#000', textDecoration: 'none' }}
						>
							特定商取引
						</Link>
						<Typography variant='body2'>|</Typography>
						<Link
							to={'/ec-site/privacy'}
							style={{ color: '#000', textDecoration: 'none' }}
						>
							プライバシーポリシー
						</Link>
					</Box>
				</Grid>
			</Grid>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				sx={{ mt: 2 }}
			>
				{'© '}
				{new Date().getFullYear()}
				{' BIGS inc. ALL Rights Reserved.'}
			</Typography>
		</Box>
	);
};
