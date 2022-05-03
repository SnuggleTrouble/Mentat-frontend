import { createContext, useState, useEffect } from "react";
import { client } from "client";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const saveToken = token => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const signup = async ( userName, email, password) => {
    const response = await client.post("/auth/signup", {
      userName,
      email,
      password,
    });
    navigate("/login");
  };

  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      const foundUser = {
        userName: response.data.userName,
        email: response.data.email,
      };
      setUser(foundUser);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    // Endpoint for acquiring posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/comment`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    return result.data;
  };

  const verify = async () => {
    try {
      const response = await client.post("/auth/verify");
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      navigate("/landing");
    }
  };

  const logout = () => {
    deleteToken();
    setUser(null);
    navigate("/landing");
  };

  useEffect(() => {
    verify();
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
    getComments,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
