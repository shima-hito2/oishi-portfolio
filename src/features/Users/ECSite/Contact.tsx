import { Box, Button, TextField, Typography } from '@mui/material';

export const ContactPage = () => {
	return (
		<Box
			sx={{
				padding: '20px',
				maxWidth: '600px',
				margin: '40px auto',
				backgroundColor: '#f9f9f9',
				borderRadius: '8px',
				boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Typography
				variant='h4'
				gutterBottom
				sx={{ color: '#333', textAlign: 'center' }}
			>
				お問い合わせ
			</Typography>
			<Typography
				variant='body1'
				paragraph
				sx={{ color: '#555', marginBottom: '20px' }}
			>
				ご質問やご不明点がございましたら、以下のフォームよりお問い合わせください。できるだけ早くご連絡いたします。
			</Typography>

			<form noValidate autoComplete='off'>
				<TextField
					fullWidth
					required
					label='お名前'
					variant='outlined'
					margin='normal'
					sx={{ marginBottom: '20px' }}
				/>
				<TextField
					fullWidth
					required
					label='メールアドレス'
					type='email'
					variant='outlined'
					margin='normal'
					sx={{ marginBottom: '20px' }}
				/>
				<TextField
					fullWidth
					required
					label='お問い合わせ内容'
					multiline
					rows={4}
					variant='outlined'
					margin='normal'
					sx={{ marginBottom: '20px' }}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					sx={{
						width: '100%',
						padding: '10px 0',
						backgroundColor: '#333',
					}}
				>
					送信
				</Button>
			</form>
		</Box>
	);
};
