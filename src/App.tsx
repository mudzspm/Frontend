import './App.css';

import NavBar from './components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
