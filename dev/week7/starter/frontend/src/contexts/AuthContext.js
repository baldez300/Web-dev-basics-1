// AuthContext.js
import { createContext, useContext, useState } from 'react';
import useField  from '../hooks/useField';
import useLogin from '../hooks/useLogin';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const email = useField("email");
  const password = useField("password");
  const [popupOpen,setPopup]= useState(false);
  const {login,isLoading, error} = useLogin("/api/users/login");

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, email, password, popupOpen, isLoading, error, setPopup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
