import { InfoList } from './InfoList';

export const NewsPage = () => {
	return (
		<>
			<InfoList
				backgroundColor='#FFC0CB'
				title='お知らせ'
				items={[
					{
						to: '/ec-site/news/1',
						date: '2021/10/01',
						content: '商品1が1位になりました',
					},
					{
						to: '/ec-site/news/2',
						date: '2021/10/02',
						content: '商品2が2位になりました',
					},
					{
						to: '/ec-site/news/3',
						date: '2021/10/03',
						content: '商品3が3位になりました',
					},
					{
						to: '/ec-site/news/4',
						date: '2021/10/04',
						content: '商品4が4位になりました',
					},
					{
						to: '/ec-site/news/1',
						date: '2021/10/01',
						content: '商品1が1位になりました',
					},
					{
						to: '/ec-site/news/2',
						date: '2021/10/02',
						content: '商品2が2位になりました',
					},
					{
						to: '/ec-site/news/3',
						date: '2021/10/03',
						content: '商品3が3位になりました',
					},
					{
						to: '/ec-site/news/4',
						date: '2021/10/04',
						content: '商品4が4位になりました',
					},
				]}
			/>
		</>
	);
};
