import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Typography,
} from '@mui/material';
import type { FC } from 'react';

type Props = {
	accountOpen: boolean;
	setAccountOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AccountDialog: FC<Props> = (props: Props) => {
	const { accountOpen, setAccountOpen } = props;

	const handleClose = () => {
		setAccountOpen(false);
	};

	return (
		<>
			<Dialog open={accountOpen} onClose={handleClose}>
				<DialogTitle>ログイン/新規登録</DialogTitle>
				<DialogContent>
					<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<TextField
							sx={{ m: 2, width: 400 }}
							label='メールアドレス'
						/>
						<TextField
							sx={{ m: 2, width: 400 }}
							label='パスワード'
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>キャンセル</Button>
					<Button onClick={handleClose}>実行</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
