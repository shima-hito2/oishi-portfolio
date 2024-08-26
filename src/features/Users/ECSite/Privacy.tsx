import { Box, Typography } from '@mui/material';

export const PrivacyPolicyPage = () => {
	return (
		<Box
			sx={{
				padding: '20px',
				backgroundColor: '#f9f9f9',
				margin: '40px auto',
			}}
		>
			<Typography variant='h4' gutterBottom sx={{ color: '#333' }}>
				プライバシーポリシー
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、お客様の個人情報の保護に最大限の注意を払っております。このプライバシーポリシーでは、当社が収集する情報、その利用方法、および情報の保護方法について説明します。
			</Typography>

			<Typography
				variant='h6'
				gutterBottom
				sx={{ color: '#333', marginTop: '20px' }}
			>
				1. 個人情報の取得
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、サービスの提供に必要な範囲でお客様の個人情報を取得します。取得する情報には、氏名、住所、電話番号、メールアドレスなどが含まれます。
			</Typography>

			<Typography
				variant='h6'
				gutterBottom
				sx={{ color: '#333', marginTop: '20px' }}
			>
				2. 個人情報の利用目的
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、お客様の個人情報を以下の目的で利用します。
			</Typography>
			<Typography
				variant='body2'
				paragraph
				sx={{ color: '#555', marginLeft: '20px' }}
			>
				- サービス提供およびサポートのため
				<br />- 商品およびサービスに関するご案内のため
				<br />- お客様への重要な通知を行うため
				<br />- マーケティング活動や市場調査のため
			</Typography>

			<Typography
				variant='h6'
				gutterBottom
				sx={{ color: '#333', marginTop: '20px' }}
			>
				3. 個人情報の第三者提供
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、お客様の同意を得た場合を除き、個人情報を第三者に提供することはありません。ただし、以下の場合を除きます。
			</Typography>
			<Typography
				variant='body2'
				paragraph
				sx={{ color: '#555', marginLeft: '20px' }}
			>
				- 法令に基づく場合
				<br />-
				人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合
				<br />-
				公衆衛生の向上や児童の健全な育成のために特に必要であり、本人の同意を得ることが困難な場合
			</Typography>

			<Typography
				variant='h6'
				gutterBottom
				sx={{ color: '#333', marginTop: '20px' }}
			>
				4. 個人情報の保護
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、個人情報の不正アクセス、紛失、破壊、改ざんおよび漏洩を防止するために、適切な技術的および組織的措置を講じます。
			</Typography>

			<Typography
				variant='h6'
				gutterBottom
				sx={{ color: '#333', marginTop: '20px' }}
			>
				5. プライバシーポリシーの変更
			</Typography>
			<Typography variant='body1' paragraph sx={{ color: '#555' }}>
				当社は、法令の変更やサービス内容の変更に伴い、プライバシーポリシーを変更する場合があります。変更があった場合には、当社ウェブサイトにて通知いたします。
			</Typography>
		</Box>
	);
};
