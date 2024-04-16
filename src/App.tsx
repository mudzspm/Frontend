import './App.css';
import NavBar from './components/ui/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/footer';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
