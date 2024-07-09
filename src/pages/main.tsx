import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Page as AdminTop } from './Admin';
import { Page as UsersTop } from './Users';
import { Blog } from '../features/Users/Blog';
import { News } from '../features/Users/News';
import { Recruit } from '../features/Users/Recruit';

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
