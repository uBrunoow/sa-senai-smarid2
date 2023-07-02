import React, { useContext } from 'react';
import { useRoutes, useNavigate, Navigate} from 'react-router-dom';

// Contexto de autenticação
import { AuthContext } from './AuthContext';

// Componentes de páginas
import Account from './routes/pages/Minha-conta';
import Login from './routes/pages/Login';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Definir rota de login
  const publicRoute = { path: 'login', element: <Login /> };

  // Definir rota privada
  const privateRoute = 
  {
    path: 'app',
    element: isAuthenticated ? <Account /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  };

  // Definir rotas principais
  const routes = [publicRoute, privateRoute];

  return useRoutes(routes);
};

export default AppRoutes;