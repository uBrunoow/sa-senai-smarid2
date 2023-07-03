// Importar estilo do sass
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "../sass/desejos.sass";

// Importar componentes
import F1 from "./components/Favorito/favorito";
import Footer from "./components/Footer/footer";
import { NavbarLogado } from "./components/Navbar-logado/Navbar_logado";

// Importar icones
import { FaHeart } from "react-icons/fa";
import Error404 from "./Error404";

export default function Desejos() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Verificar se o usuário está autenticado
    const jwtToken = Cookies.get("jwtToken");

    if (jwtToken) {
      // Fazer uma requisição ao backend para obter os dados do usuário
      fetch("http://localhost:3002/user/64a092c59502c6bfdc630756", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Armazenar os dados do usuário no estado
          setUserData(data);
        })
        .catch((error) => {
          console.error("Erro ao obter os dados do usuário:", error);
        });
    } else {
      // O usuário não está autenticado, redirecionar para a página de login
      window.location.href = "/login";
    }
  }, []);

  if (userData) {
    return (
      <div className="Body_page">
        <NavbarLogado />
        <main className="favoritos">
          <div className="favoritos-content">
            <div className="titulo-favoritos">
              <FaHeart id="Coracao" />
              <h1>Meus favoritos</h1>
            </div>
            {/* Componentes de favoritos */}
            <F1 />
            <F1 />
            <F1 />
            <F1 />
            <F1 />
            <F1 />
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return <Error404/>;
  }
}
