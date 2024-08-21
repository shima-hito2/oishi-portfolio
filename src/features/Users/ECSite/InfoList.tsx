import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	title: string;
	items: {
		date: string;
		content: string;
	}[];
};

export const InfoList: FC<Props> = (props: Props) => {
	const { title, items } = props;
	return (
		<>
			<Box sx={{ padding: '20px' }}>
				<Typography variant='h6' gutterBottom>
					{title}
				</Typography>
				<Box>
					{items.map((news, index) => (
						<Box
							key={index}
							sx={{
								marginBottom: '10px',
								padding: '10px',
								borderRadius: '8px',
								boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
								backgroundColor: '#fff',
							}}
						>
							<Link
								to={`/ECsite/news/${index}`}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									textDecoration: 'none',
									color: 'inherit',
								}}
							>
								<Box>
									<Typography
										variant='body2'
										color='textSecondary'
									>
										{news.date}
									</Typography>
									<Typography variant='body1'>
										{news.content}
									</Typography>
								</Box>
								<Box
									sx={{
										marginLeft: '10px',
										alignSelf: 'center',
									}}
								>
									<Typography variant='body1'>
										&gt;
									</Typography>
								</Box>
							</Link>
						</Box>
					))}
				</Box>
				<Box sx={{ textAlign: 'right', marginTop: '10px' }}>
					<Link to={'/ECsite/news'}>一覧へ &gt;</Link>
				</Box>
			</Box>
		</>
	);
};
