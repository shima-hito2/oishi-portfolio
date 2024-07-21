import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Blog } from '../features/Users/Blog';
import { NewsList } from '../features/Users/News/NewsList';
import { NewsPage } from '../features/Users/News/NewsPage';
import { News } from '../features/Users/News/index';
import { RecruitList } from '../features/Users/Recruit/RecruitList';
import { RecruitPage } from '../features/Users/Recruit/RecruitPage';
import { Recruit } from '../features/Users/Recruit/index';
import { Top as UserTop } from '../features/Users/Top/index';
import { Page as AdminTop } from './Admin';
import { Page as Users } from './Users';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const router = createHashRouter([
	{
		path: '/',
		element: <Users />,
		children: [
			{
				path: '/top',
				element: <UserTop />,
			},
			{
				path: '/blog',
				element: <Blog />,
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
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
);
