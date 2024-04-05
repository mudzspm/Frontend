import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/home/home.tsx';
import Qurban from './pages/qurban/qurban.tsx';
import Aqiqa from './pages/aqiqa/aqiqa.tsx';
import FeedLot from './pages/Feedlot/feedlot.tsx';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './pages/profile/profile.tsx';
// import SignIn from './pages/auth/signIn.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: '/signIn',
      //   element: <SignIn/>
      // },
      {
        path: '/qurban',
        element: <Qurban />,
      },
      {
        path: '/aqiqa',
        element: <Aqiqa />,
      },
      {
        path: '/feedlot',
        element: <FeedLot />,
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);