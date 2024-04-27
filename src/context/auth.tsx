import { createContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('authToken'),
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
