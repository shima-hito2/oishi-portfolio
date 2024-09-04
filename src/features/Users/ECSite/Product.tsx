import { getImage } from '../../../getImagePath';
import { ItemList } from './ItemList';

export const ProductPage = () => {
	return (
		<>
			<ItemList
				title='商品一覧'
				description='商品一覧です'
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
