import { createContext, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (!storedToken) {
      window.location.href = '/signin';
    }
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
