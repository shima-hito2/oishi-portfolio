import { getImage } from '../../../getImagePath';
import { ItemList } from './ItemList';

export const ProductPage = () => {
	return (
		<>
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
			<ItemList
				backgroundColor='#DDDDFF'
				title='最新商品'
				description='新着商品です'
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
				]}
			/>
		</>
	);
};
