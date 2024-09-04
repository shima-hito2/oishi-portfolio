import { getImage } from '../../../getImagePath';
import { ItemList } from './ItemList';

export const NewsPage = () => {
	return (
		<>
			<ItemList
				title='ランキング'
				description='今月の売り上げランキングです'
				items={[
					{
						title: '商品1',
						price: '1000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品2',
						price: '2000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品3',
						price: '3000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品4',
						price: '4000円',
						image: getImage('ECSite/image11.png'),
					},
				]}
			/>
			<ItemList
				title='最新商品'
				description='新着商品です'
				items={[
					{
						title: '商品1',
						price: '1000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品2',
						price: '2000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品3',
						price: '3000円',
						image: getImage('ECSite/image11.png'),
					},
					{
						title: '商品4',
						price: '4000円',
						image: getImage('ECSite/image11.png'),
					},
				]}
			/>
		</>
	);
};
