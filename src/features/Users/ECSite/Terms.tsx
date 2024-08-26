import { Box, Typography } from '@mui/material';

export const TermsPage = () => {
	return (
		<Box sx={{ padding: '20px', margin: '40px auto' }}>
			<Typography variant='h4' gutterBottom>
				特定商取引法に基づく表記
			</Typography>

			<Typography variant='h6' gutterBottom>
				1. 会社情報
			</Typography>
			<Typography variant='body1' paragraph>
				会社名：株式会社サンプルコマース
				<br />
				代表者：山田 太郎
				<br />
				所在地：東京都渋谷区神南1-1-1 サンプルビル3F
				<br />
				電話番号：03-1234-5678
				<br />
				メールアドレス：info@sample-commerce.co.jp
			</Typography>

			<Typography variant='h6' gutterBottom>
				2. 販売価格
			</Typography>
			<Typography variant='body1' paragraph>
				商品ごとに記載された価格に基づきます（消費税込み）。送料や手数料は別途発生する場合があります。
			</Typography>

			<Typography variant='h6' gutterBottom>
				3. 商品代金以外の必要料金
			</Typography>
			<Typography variant='body1' paragraph>
				送料、振込手数料、代引き手数料などが必要な場合があります。
			</Typography>

			<Typography variant='h6' gutterBottom>
				4. お支払い方法
			</Typography>
			<Typography variant='body1' paragraph>
				クレジットカード、銀行振込、代金引換、コンビニ決済をご利用いただけます。
			</Typography>

			<Typography variant='h6' gutterBottom>
				5. 商品の引き渡し時期
			</Typography>
			<Typography variant='body1' paragraph>
				ご注文後、通常7日以内に発送いたします。在庫切れの場合は別途ご連絡いたします。
			</Typography>

			<Typography variant='h6' gutterBottom>
				6. 返品・交換について
			</Typography>
			<Typography variant='body1' paragraph>
				商品到着後7日以内にご連絡いただければ、未使用・未開封の商品に限り返品・交換を承ります。送料はお客様負担となります。
			</Typography>

			<Typography variant='h6' gutterBottom>
				7. キャンセルについて
			</Typography>
			<Typography variant='body1' paragraph>
				発送前に限りキャンセルを承ります。発送後のキャンセルはお受けできません。
			</Typography>

			<Typography variant='h6' gutterBottom>
				8. その他
			</Typography>
			<Typography variant='body1' paragraph>
				当サイトに掲載されている情報は予告なく変更される場合があります。最新の情報はサイト上でご確認ください。
			</Typography>
		</Box>
	);
};
