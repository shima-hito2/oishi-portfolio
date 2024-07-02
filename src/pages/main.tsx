import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import { AdminTop } from './Admin/Top';
import { Top } from './Top';

const router = createHashRouter([
  {
    path: "/",
    element: <Top />,
    // children: [
    //   {
    //     path: "/task/:subjectId",
    //     element: <Tasks />,
    //   },
    //   {
    //     path: "/task/:subjectId/detail/:taskId",
    //     element: <Lesson />,
    //   }
    // ]
  },
  {
    // path: "/",
    path: "/admin",
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
)
