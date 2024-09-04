import type { FC } from 'react';
import { infoItems } from '../../../data/ECSite/infoItems';
import { productItems } from '../../../data/ECSite/productItems';
import { ImageSlider } from './ImageSlider';
import { InfoList } from './InfoList';
import { ItemList } from './ItemList';

export const ECSiteTop: FC = () => {
	return (
		<>
			<ImageSlider />
			<ItemList
				title='商品一覧'
				description='商品一覧です'
				items={productItems}
				href='/ECSite/product'
			/>
			<InfoList title='お知らせ' items={infoItems} href='/ECSite/news' />
		</>
	);
};
