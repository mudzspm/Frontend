import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/home/home.tsx';
import Qurban from './pages/qurban/qurban.tsx';
import Aqiqa from './pages/aqiqa/aqiqa.tsx';
import FeedLot from './pages/Feedlot/feedlot.tsx';

import './global.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// import Cart from './pages/cart/cart.tsx';
// import SignIn from './pages/auth/signIn.tsx';
import Profile from './pages/profile/profile.tsx';
import SignIn from './pages/auth/signIn.tsx';
import SignUp from './pages/auth/register.tsx';
import OTP from './pages/auth/OTP.tsx';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthContext, AuthProvider } from './context/auth.tsx';
import { useContext } from 'react';


const Root = () => {
  const { token } = useContext(AuthContext);

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
          element: token ? <Qurban /> : <Navigate to="/signin" />,
        },
        {
          path: '/aqiqa',
          element: token ? <Aqiqa /> : <Navigate to="/signin" />,
        },
        {
          path: '/feedlot',
          element: token ? <FeedLot /> : <Navigate to='signin' />,
        },
        // {
        //   path: './cart',
        //   element: <Cart />,
        // },
        {
          path: '/profile',
          element: token ? <Profile /> : <Navigate to='signin' />,
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
  return <RouterProvider router={router} />

}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ToastContainer />
    <Root />
  </AuthProvider>,
);
