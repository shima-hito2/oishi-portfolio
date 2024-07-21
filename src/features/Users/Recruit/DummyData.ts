const getImage = (fileName: string): string => {
	return import.meta.env.MODE === 'production'
		? `images/${fileName}`
		: `../../oishi-portfolio/public/images/${fileName}`;
};

export const items = [
	{
		id: '1',
		imgPath: getImage('recruit1.png'),
		datetime: '2022/12/5',
		title: 'フロントエンドエンジニア募集',
		detail: '当社では、最新のWeb技術を駆使してプロジェクトを進めるフロントエンドエンジニアを募集しています。経験者優遇。',
		salary: '年収：500万円〜700万円',
		hours: '勤務時間：9:00〜18:00（フレックスタイム制度あり）',
		benefits: '待遇：社会保険完備、交通費支給、リモートワーク可、健康診断',
	},
	{
		id: '2',
		imgPath: getImage('recruit2.png'),
		datetime: '2024/7/15',
		title: 'バックエンドエンジニア募集',
		detail: 'サーバーサイドの設計・開発を担当するバックエンドエンジニアを募集しています。高いスキルと経験を持つ方を歓迎します。',
		salary: '年収：600万円〜800万円',
		hours: '勤務時間：9:00〜18:00（フレックスタイム制度あり）',
		benefits: '待遇：社会保険完備、交通費支給、リモートワーク可、健康診断',
	},
	{
		id: '3',
		imgPath: getImage('recruit3.png'),
		datetime: '2024/7/16',
		title: 'プロジェクトマネージャー募集',
		detail: 'プロジェクト全体を統括するプロジェクトマネージャーを募集しています。リーダーシップとコミュニケーション能力が求められます。',
		salary: '年収：700万円〜900万円',
		hours: '勤務時間：9:00〜18:00（フレックスタイム制度あり）',
		benefits: '待遇：社会保険完備、交通費支給、リモートワーク可、健康診断',
	},
	{
		id: '4',
		imgPath: getImage('recruit4.png'),
		datetime: '2024/7/17',
		title: 'デザイナー募集',
		detail: 'クリエイティブなデザインを担当するデザイナーを募集しています。UI/UXの知識がある方を優遇します。',
		salary: '年収：500万円〜700万円',
		hours: '勤務時間：9:00〜18:00（フレックスタイム制度あり）',
		benefits: '待遇：社会保険完備、交通費支給、リモートワーク可、健康診断',
	},
];
