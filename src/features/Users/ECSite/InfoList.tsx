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

	const waveSvg = `data:image/svg+xml;base64,${btoa(`
        <svg width="100%" height="600px" xmlns="http://www.w3.org/2000/svg" version="1.1">
           <path d="M 0 80 Q 75 160 150 80 T 300 80 T 450 80 T 600 80 T 750 80 T 900 80 T 1050 80 T 1200 80 T 1350 80 T 1500 80 L 1500 0 L 0 0 Z" fill="#FFFFFF" />
        </svg>
    `)}`;

	return (
		<>
			<Box
				sx={{
					position: 'relative',
					backgroundColor: '#FFC0CB',
					padding: '20px',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50px', // 上からの位置調整
						left: '-10px', // 左からの位置調整
						right: '-10px', // 右からの位置調整
						height: '150px',
						backgroundImage: `url(${waveSvg})`,
						transform: 'rotate(-4deg)', // 波線の背景をさらに傾ける
						transformOrigin: 'center', // 中心を基準に回転
						zIndex: 1,
					}}
				/>
				<Box
					sx={{
						position: 'relative',
						zIndex: 2, // 背景の波線よりも前面に表示
						paddingTop: '80px', // 波線とコンテンツの間隔を調整
					}}
				>
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
			</Box>
		</>
	);
};
