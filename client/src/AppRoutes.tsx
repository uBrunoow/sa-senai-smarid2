import React, { useContext } from 'react';
import { useRoutes, useNavigate, Navigate} from 'react-router-dom';

// Contexto de autenticação
import { AuthContext } from './AuthContext';

// Componentes de páginas públicas
import Login from './routes/pages/Login';

// Componentes de páginas privadas
import Account from './routes/pages/Minha-conta';
import Desejos from './routes/pages/Desejos';
import Carrinho from './routes/pages/Carrinho';
import Pagamento from './routes/pages/Pagamento';
import Historico from './routes/pages/Historico';
import App from './App';
import Initialpage from './routes/pages/Initial-page';
import Pesquisa from './routes/pages/Pesquisa';
import Compra from './routes/pages/Compra';
import Sobre from './routes/pages/Sobre';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Definir rota de login
  const publicLoginRoute = { 
    path: '/login', 
    element: <Login /> 
  };
  const publicRoute = { 
    path: '/', 
    element: <App /> 
  };
  const publicInitialRoute = { 
    path: 'initialpage', 
    element: <Initialpage /> 
  };
  const publicSearchRoute = { 
    path: 'pesquisa', 
    element: <Pesquisa /> 
  };
  const publicBuyRoute = { 
    path: 'compra', 
    element: <Compra /> 
  };
  const publicAboutRoute = { 
    path: 'sobre', 
    element: <Sobre /> 
  };

  // Definir rotas privadas
  const privateAccountRoute = 
  {
    path: 'app',
    element: isAuthenticated ? <Account /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  }

  const privateWishRoute = 
  {
    path: 'lista-de-desejos',
    element: isAuthenticated ? <Desejos /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  }

  const privateCartRoute = 
  {
    path: 'carrinho',
    element: isAuthenticated ? <Carrinho /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  }
  const privatePaymentRoute = 
  {
    path: 'pagamento',
    element: isAuthenticated ? <Pagamento /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  }
  const privateHistoricRoute = 
  {
    path: 'historico',
    element: isAuthenticated ? <Historico /> : <Navigate to="/login" />,
    children: [
      { path: '/', element: <h1>Dashboard</h1> },
      // Outras rotas privadas
    ],
  }


  // Definir rotas principais
  const routes = [
    publicRoute,
    publicInitialRoute,
    publicSearchRoute,
    publicBuyRoute,
    publicAboutRoute,
    publicLoginRoute,
    privateAccountRoute, 
    privateWishRoute, 
    privateCartRoute, 
    privatePaymentRoute, 
    privateHistoricRoute
  ];

  return useRoutes(routes);
};

export default AppRoutes;