import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layouts/navbar-layout';
import HomePage from 'pages/home-page/index';
import SingleAnimalPage from 'pages/single-animal-page/index';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.SingleAnimalPage.path,
        element: <SingleAnimalPage />,
      },
    ],
  },
]);

export default router;
