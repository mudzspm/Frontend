import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Profile from './pages/profile/profile.tsx';
import App from './App.tsx';
import Packages from './pages/packages/packages.tsx';
import Home from './pages/home/home.tsx';

import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/packages',
        element: <Packages />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
