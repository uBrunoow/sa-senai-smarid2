import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Lógica de autenticação aqui
    useEffect(() => {
      // Buscar as informações do usuário quando o componente for montado
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      const jwtToken = Cookies.get("jwtToken");
      try {
        const response = await axios.get(
          "http://localhost:3002/user/64a092c59502c6bfdc630756",
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        const userData = response.data;
      } catch (error) {
        console.error("Erro ao buscar as informações do usuário:", error);
      }
    };
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lógica de logout aqui
    // Remover o token dos cookies
    Cookies.remove("jwtToken");

    // Redirecionar para a página de login ou página inicial
    window.location.href = "/login";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
