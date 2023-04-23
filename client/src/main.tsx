import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//PAGES
import Initialpage from "./routes/pages/Initial-page";
import Login from "./routes/pages/Login";
import Desejos from "./routes/pages/Desejos";
import Account from "./routes/pages/Minha-conta";
import Carrinho from "./routes/pages/Carrinho";
import Pesquisa from "./routes/pages/Pesquisa";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "initialpage",
        element: <Initialpage />,
    },

    {
        path: "login",
        element: <Login />,
    },
    {
        path: "lista-de-desejos",
        element: <Desejos />,
    },
    {
        path: "conta",
        element: <Account />,
    },
    {
        path: "carrinho",
        element: <Carrinho />,
    },
    {
        path: "pesquisa",
        element: <Pesquisa />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
