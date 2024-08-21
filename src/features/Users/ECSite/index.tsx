import type { FC } from 'react';
import { HeaderSwither } from '../../../components/ECHeader/HeaderSwitcher';
import { Footer } from '../../../components/ECSite/footer';
import { infoItems } from '../../../data/ECSite/infoItems';
import { productItems } from '../../../data/ECSite/productItems';
import { InfoList } from '../../../features/Users/ECSite/InfoList';
import { ItemList } from '../../../features/Users/ECSite/ItemList';

export const ECSite: FC = () => {
	return (
		<>
			<HeaderSwither />
			<main>
				<ItemList
					title='商品一覧'
					description='商品一覧です'
					items={productItems}
				/>
				<InfoList title='お知らせ' items={infoItems} />
			</main>
			<Footer title='ECサイト' />
		</>
	);
};
