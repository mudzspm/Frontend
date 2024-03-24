import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Packages from './pages/packages/packages.tsx';
import Home from './pages/home/home.tsx';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
