import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Blog } from '../features/Users/Blog';
import { ItemList as HPItemList } from '../features/Users/HomePage/ItemList';
import { Top as HPTop } from '../features/Users/HomePage/Top';
import { NewsPage } from '../features/Users/News/NewsPage';
import { News } from '../features/Users/News/index';
import { RecruitList } from '../features/Users/Recruit/RecruitList';
import { RecruitPage } from '../features/Users/Recruit/RecruitPage';
import { Recruit } from '../features/Users/Recruit/index';
import { Top as UserTop } from '../features/Users/Top/index';
import { Page as AdminTop } from './Admin';
import { Page as Users } from './Users';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ECSite } from '../features/Users/ECSite';
import { HomePage } from '../features/Users/HomePage';
import { Faq } from '../features/Users/HomePage/Faq';
import { MapComponent } from '../features/Users/HomePage/MapComponent';
import { NewsList } from '../features/Users/News/NewsList';

const router = createHashRouter([
	{
		path: '/',
		element: <Users />,
		children: [
			{
				path: '/',
				element: <UserTop />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/ec-site',
				element: <ECSite />,
				// children: [
				// 	{
				// 		path: '/ec-site/contact',
				// 		element: <ECContact />,
				// 	},
				// ],
			},
			{
				path: '/home-page',
				element: <HomePage />,
				children: [
					{
						path: '/home-page',
						element: <HPTop />,
					},
					{
						path: '/home-page/news',
						element: <HPItemList title='NEWS' />,
					},
					{
						path: '/home-page/access',
						element: <MapComponent />,
					},
					{
						path: '/home-page/column',
						element: <HPItemList title='COLUMN' />,
					},
					{
						path: '/home-page/faq',
						element: <Faq />,
					},
				],
			},
			{
				path: '/news',
				element: <News />,
				children: [
					{
						path: '/news/list',
						element: <NewsList />,
					},
					{
						path: '/news/item/:id',
						element: <NewsPage />,
					},
				],
			},
			{
				path: '/news/:id',
				element: <News />,
			},
			{
				path: '/recruit',
				element: <Recruit />,
				children: [
					{
						path: '/recruit/list',
						element: <RecruitList />,
					},
					{
						path: '/recruit/item/:id',
						element: <RecruitPage />,
					},
				],
			},
		],
	},
	{
		// path: "/",
		path: '/admin',
		element: <AdminTop />,
		// children: [
		//   {
		//     path: "/admin/subject",
		//     element: <SubjectMaster />,
		//   },
		//   {
		//     path: "/admin/task",
		//     element: <RegistTask />,
		//   }
		// ]
	},
]);

const theme = createTheme({
	typography: {
		fontFamily: [
			'Yu Mincho Light',
			'YuMincho',
			'Yu Mincho',
			'sans-serif',
		].join(','),
	},
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme={theme}>
		<RouterProvider router={router} />
	</ThemeProvider>,
);
