import InfoIcon from '@mui/icons-material/Info';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { notifications } from '../../data/ECSite/notifications';
export const Notifications: React.FC = () => {
	return (
		<Box
			sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, mb: 4 }}
			display='flex'
		>
			<Box display='flex' alignItems='center' mb={2}>
				<Button
					variant='contained'
					color='primary'
					startIcon={<InfoIcon />}
					sx={{
						mr: 2,
						backgroundColor: '#333',
						color: '#fff',
						'&:hover': {
							backgroundColor: '#555',
						},
						borderRadius: '0',
						padding: '6px 16px',
					}}
				>
					お知らせ
				</Button>
			</Box>
			<List>
				{notifications.map((notification, index) => (
					<ListItem
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						alignItems='flex-start'
						sx={{ display: 'flex', alignItems: 'center' }}
					>
						<Typography
							variant='body2'
							sx={{ width: '90px', mr: 1 }}
						>
							{notification.date}
						</Typography>
						<Typography
							variant='body2'
							sx={{ mr: 1, fontWeight: 'bold' }}
						>
							{notification.type}
						</Typography>
						<Typography variant='body2'>
							{`| ${notification.message}`}
						</Typography>
					</ListItem>
				))}
			</List>
		</Box>
	);
};
