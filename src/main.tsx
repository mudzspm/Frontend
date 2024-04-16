import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/home/home.tsx';
import Qurban from './pages/qurban/qurban.tsx';
import Aqiqa from './pages/aqiqa/aqiqa.tsx';
import FeedLot from './pages/Feedlot/feedlot.tsx';

import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Cart from './pages/cart/cart.tsx';
// import SignIn from './pages/auth/signIn.tsx';
import Profile from './pages/profile/profile.tsx';
import SignIn from './pages/auth/signIn.tsx';
import SignUp from './pages/auth/register.tsx';
import OTP from './pages/auth/OTP.tsx';
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
      // {
      //   path: './cart',
      //   element: <Cart />,
      // },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },

  {
    path: '/otp',
    element: <OTP />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
