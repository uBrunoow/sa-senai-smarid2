import "../sass/pagamento.sass";

import Navbar_pag from "./components/Navbar-pagamento/navbar-pag";
import Footer from "./components/Footer/footer";
import { HiLockClosed } from "react-icons/hi";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Error404 from "./Error404";

export default function Pagamento() {
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
        <main>
          <Navbar_pag />
          <div className="flex-pag">
            <div className="pag-container">
              <div className="pag-box-roxa">
                <p className="texto-pag"> PAGAMENTO VIA BOLETO</p>
                <h1 className="title-pag">R$3000,00</h1>
                <p className="subtext-pag">(economize: R$)</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return <Error404 />;
  }
}
