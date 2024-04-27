import './App.css';

import NavBar from './components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/footer';
import { AuthProvider } from './context/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <NavBar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}

export default App;
