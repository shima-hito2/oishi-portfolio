import { Box, Button, Grid, Typography } from '@mui/material';
import type { FC } from 'react';
import { getImage } from '../../../getImagePath';
import { ItemList } from './ItemList';

export const ProductDetail: FC = () => {
	return (
		<>
			<Box sx={{ padding: '20px' }}>
				<Grid container spacing={4}>
					{/* Product Image */}
					<Grid item xs={12} md={6}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<img
								src={getImage('ECSite/image11.png')}
								alt='商品1'
								style={{
									width: '100%',
									maxWidth: '400px',
									borderRadius: '10px',
								}}
							/>
						</Box>
					</Grid>

					{/* Product Information */}
					<Grid item xs={12} md={6}>
						<Typography variant='h5' gutterBottom>
							商品1【トリコロール】 -Standard-
						</Typography>
						<Typography
							variant='body1'
							sx={{ marginBottom: '10px' }}
						>
							型番: 4580453900042
						</Typography>
						<Typography variant='h6' sx={{ marginBottom: '10px' }}>
							販売価格: 1000円(税込1100円)
						</Typography>

						{/* Add to Cart Button */}
						<Box sx={{ marginBottom: '20px' }}>
							<Typography variant='body2'>
								購入数:
								<input
									type='number'
									min='1'
									defaultValue='1'
									style={{
										width: '50px',
										marginLeft: '10px',
										padding: '5px',
									}}
								/>
							</Typography>
						</Box>

						<Button
							variant='contained'
							color='primary'
							sx={{ marginRight: '10px' }}
						>
							カートに入れる
						</Button>

						{/* Inquiry Button */}
						<Button variant='outlined' color='secondary'>
							この商品についてお問い合わせ
						</Button>
					</Grid>
				</Grid>

				{/* Product Description Section */}
				<Box sx={{ marginTop: '40px' }}>
					<Typography variant='h6' gutterBottom>
						商品説明
					</Typography>
					<Typography variant='body1'>
						この商品は、トリコロールカラーのデザインを取り入れたスタイリッシュなブレスレットです。高品質な素材を使用しており、耐久性に優れ、普段使いにも最適です。軽量で手首に優しいデザインで、長時間の使用でも快適です。
					</Typography>
					<Box sx={{ marginTop: '20px' }}>
						<Typography variant='body2'>
							・カラー: トリコロール
						</Typography>
						<Typography variant='body2'>
							・素材: 高品質ナイロン
						</Typography>
						<Typography variant='body2'>
							・サイズ: フリーサイズ（調節可能）
						</Typography>
						<Typography variant='body2'>・生産国: 日本</Typography>
					</Box>
				</Box>
			</Box>
			<ItemList
				backgroundColor='#DDDDFF'
				title='関連商品'
				description='この商品を見た人はこんな商品も見ています'
				items={[
					{
						to: '/ec-site/product/2',
						title: '商品2',
						price: '2000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/3',
						title: '商品3',
						price: '3000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/4',
						title: '商品4',
						price: '4000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/5',
						title: '商品5',
						price: '5000円',
						image: getImage('ECSite/image11.png'),
					},
				]}
			/>
			<ItemList
				backgroundColor='#FFDDDD'
				title='ランキング'
				description='今月の売り上げランキングです'
				items={[
					{
						to: '/ec-site/product/1',
						title: '商品1',
						price: '1000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/2',
						title: '商品2',
						price: '2000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/3',
						title: '商品3',
						price: '3000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/4',
						title: '商品4',
						price: '4000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/1',
						title: '商品1',
						price: '1000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/2',
						title: '商品2',
						price: '2000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/3',
						title: '商品3',
						price: '3000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						to: '/ec-site/product/4',
						title: '商品4',
						price: '4000円',
						image: getImage('ECSite/image11.png'),
					},
				]}
			/>
		</>
	);
};
