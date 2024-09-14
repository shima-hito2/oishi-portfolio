import { Box, Link, Typography } from '@mui/material';
import type { FC } from 'react';
import { InfoList } from './InfoList';

export const NewsDetail: FC = () => {
	return (
		<>
			<Box sx={{ padding: '20px' }}>
				{/* Title */}
				<Typography variant='h5' gutterBottom>
					「クラシックシルバーブレスレット」ご購入の皆様へ：アレルギー情報、メンテナンス、お手入れの注意点
				</Typography>

				{/* Date */}
				<Typography variant='body2' sx={{ marginBottom: '20px' }}>
					2024.09.14
				</Typography>

				{/* Description */}
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					いつも弊社のアクセサリーをご愛用いただき、誠にありがとうございます。新たに発売された「クラシックシルバーブレスレット」について、以下のアレルギー情報、メンテナンスの推奨事項、保管時の注意点をご案内させていただきます。
				</Typography>

				{/* Allergy Information */}
				<Typography variant='h6' sx={{ marginBottom: '10px' }}>
					1. アレルギー情報
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					「クラシックシルバーブレスレット」は、シルバー925（スターリングシルバー）を使用しておりますが、ニッケルが微量含まれているため、金属アレルギーをお持ちの方はご注意ください。万が一、かゆみや赤みなどのアレルギー反応が出た場合は、すぐに使用を中止し、医師にご相談いただくことをお勧めします。アレルギーに関する詳細な情報は、下記のリンクからもご確認いただけます。
				</Typography>

				{/* Links for Allergy Information */}
				<Box sx={{ marginBottom: '20px' }}>
					<Typography variant='body1'>
						アレルギー情報の詳細はこちら
					</Typography>
					<Link href='https://www.example.com/allergy_information'>
						https://www.example.com/allergy_information
					</Link>
				</Box>

				{/* Maintenance Information */}
				<Typography variant='h6' sx={{ marginBottom: '10px' }}>
					2. メンテナンスとお手入れ
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					シルバー製品は空気中の酸素と反応し、時間とともに変色することがあります。定期的なお手入れを行うことで、長く美しい状態を保つことができます。ブレスレットのお手入れには、シルバー専用のクロスを使用し、優しく拭き取ってください。水に濡れた場合は、柔らかい布でしっかり乾かし、湿気の少ない場所で保管するようにしましょう。なお、シルバークリーナーを使用する際は、商品説明に従って正しくお使いください。
				</Typography>

				{/* Storage and Care Information */}
				<Typography variant='h6' sx={{ marginBottom: '10px' }}>
					3. 保管時の注意点
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '20px' }}>
					アクセサリーを長くお使いいただくためには、保管方法も重要です。使用後は必ず柔らかい布で汚れを拭き取り、ジッパー付きの小さな袋やジュエリーボックスに入れて、直射日光を避けた場所に保管してください。また、他の金属と一緒に保管すると傷がつく恐れがあるため、単独で保管することをお勧めします。さらに、香水やヘアスプレーなどの化学物質が直接触れないよう注意し、特に温泉などの硫黄を含む環境では着用しないでください。
				</Typography>

				{/* Material Details Links */}
				<Box sx={{ marginBottom: '20px' }}>
					<Typography variant='body1'>
						素材に関する詳細はこちら
					</Typography>
					<Link href='https://www.example.com/material_information'>
						https://www.example.com/material_information
					</Link>
				</Box>

				{/* Closing Text */}
				<Typography variant='body1'>
					クラシックシルバーブレスレットを快適にお使いいただくために、定期的なメンテナンスと正しい保管方法を心がけてください。ご不明点がございましたら、上記リンクより詳細情報をご確認ください。今後とも、弊社のアクセサリーをご愛顧賜りますようお願い申し上げます。
				</Typography>
			</Box>
			<InfoList
				backgroundColor='#FFC0CB'
				title='その他のお知らせ'
				items={[
					{
						to: '/ec-site/news/1',
						date: '2021/10/01',
						content: '商品1が1位になりました',
					},
					{
						to: '/ec-site/news/2',
						date: '2021/10/02',
						content: '商品2が2位になりました',
					},
					{
						to: '/ec-site/news/3',
						date: '2021/10/03',
						content: '商品3が3位になりました',
					},
				]}
			/>
		</>
	);
};
