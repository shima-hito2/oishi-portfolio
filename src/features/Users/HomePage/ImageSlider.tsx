import Box from '@mui/material/Box';
import type { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { themeColor } from '.';
import { getImage } from '../../../getImagePath';

const images = [
	{
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath: getImage('homePage/image1.png'),
	},
	{
		label: 'Bird',
		imgPath: getImage('homePage/image2.png'),
	},
	{
		label: 'Bali, Indonesia',
		imgPath: getImage('homePage/image3.png'),
	},
	{
		label: 'Goč, Serbia',
		imgPath: getImage('homePage/image4.png'),
	},
	{
		label: 'Goč, Serbia2',
		imgPath: getImage('homePage/image5.png'),
	},
];

export const ImageSlider: FC = () => {
	return (
		<Box sx={{ py: 8 }}>
			{/* カルーセル */}
			<Carousel
				autoPlay={true} //自動でCarouselを動かすかどうか(true or false)
				//stopAutoPlayOnHover = {true} Carouselの上にマウスを置いている間、自動スクロールを継続するかどうか
				//interval = {4000} 自動でCarouselを動かす時間の間隔(ミリ秒単位)
				animation='slide' //(fade or slide) Carouselのアニメーションの種類を変更
				//duration = {500} アニメーションの長さを定義
				//swipe = {true} スワイプで動かせるかどうか
				//indicators = {true} インジケーター(下の丸いアイコン)が必要かどうか
				// navButtonsAlwaysVisible={true} //常に矢印アイコンを表示するかどうか
				navButtonsAlwaysInvisible={true} //常に矢印アイコンを非表示にするかどうか
				//cycleNavigation = {true} //最後のスライドから「次へ」の矢印アイコンを押した時に最初にスライドに動かせるようにするかどうか
				//fullHeightHover = {true} //次/前のボタンがItem要素の高さ全体をカバーし、ホバー時にボタンを表示するかどうか

				indicatorIconButtonProps={{
					//アクティブでない下の丸いアイコンの設定
					style: {
						padding: '10px', //位置調整
						color: '#DEDEDE',
					},
				}}
				activeIndicatorIconButtonProps={{
					//アクティブな下の丸いアイコンの設定
					style: {
						color: themeColor,
					},
				}}
				indicatorContainerProps={{
					style: {
						margin: '3px 0px 0px 0px',
					},
				}}
				navButtonsWrapperProps={{
					style: {
						marginTop: '55px',
					},
				}}
				navButtonsProps={{
					style: {
						color: 'rgb(0,0,0,1)',
						background: 'rgb(255,255,255,0)',
					},
				}}
			>
				{images.map(step => (
					<div key={step.label}>
						<Box
							component='img'
							sx={{
								height: 'calc( 100vw * 0.25 )',
								display: 'block',
								maxWidth: '60%',
								overflow: 'hidden',
								width: '100%',
								margin: '0 auto',
							}}
							src={step.imgPath}
						/>
					</div>
				))}
			</Carousel>
		</Box>
	);
};
