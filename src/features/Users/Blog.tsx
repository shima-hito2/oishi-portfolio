import { Button } from '@mui/material';
import { type FC, useState } from 'react';

export const Blog: FC = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<>
			<a href='https://tef-tanigumi.jp/'>参考サイト</a>
			<div>count:{count}</div>
			<Button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				プラス
			</Button>
			<Button
				variant='contained'
				sx={{ textDecorationLine: 'underline' }}
			>
				Contained
			</Button>
		</>
	);
};
