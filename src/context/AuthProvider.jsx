import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await api.get("/auth/me", { withCredentials: true });
        if (response.data && response.data._id) {
          setIsLoggedIn(true);
          setUserData(response.data);
        } else {
          setIsLoggedIn(false);
          setUserData({});
        }
      } catch (error) {
        setIsLoggedIn(false);
        setUserData({});
      }
    };
    checkUser();
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
