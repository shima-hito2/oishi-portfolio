import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Blog } from '../features/Users/Blog';
import { NewsList } from '../features/Users/News/NewsList';
import { NewsPage } from '../features/Users/News/NewsPage';
import { News } from '../features/Users/News/index';
import { Recruit } from '../features/Users/Recruit';
import { Page as AdminTop } from './Admin';
import { Page as UsersTop } from './Users';

const router = createHashRouter([
	{
		path: '/',
		element: <UsersTop />,
		children: [
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

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
