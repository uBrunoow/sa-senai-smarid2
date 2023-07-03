// Importar estilo do sass
import "../sass/historico.sass";

// Importar componentes
import Footer from "./components/Footer/footer";
import { NavbarLogado } from "./components/Navbar-logado/Navbar_logado";
import Produtos from "/src/assets/IMG/img-produtos/produto1.svg";

// Importar icones
import { MdShoppingBasket } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdForklift } from "react-icons/md";
import { HiInboxArrowDown } from "react-icons/hi2";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";

// Importar usabilidades do react
import { useRef, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Error404 from "./Error404";

export default function Historico() {
  function Clickinfo() {
    var myImage = document.getElementById("flecha") as HTMLImageElement;
    var detalhes = document.getElementById("detalhes") as HTMLDivElement;
    myImage.style.transition = "all .5s ease-in-out";
    if (myImage.style.transform == "rotate(180deg)") {
      myImage.style.transform = "rotate(0deg)";
    } else {
      myImage.style.transform = "rotate(180deg)";
    }
    detalhes.style.transition = "all .5s ease-in-out";
    if (detalhes.style.display == "block") {
      detalhes.style.display = "none";
    } else {
      detalhes.style.display = "block";
    }
  }

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
        <main className="historico">
          <div className="historico-wrapper">
            <div className="historico-content">
              <div className="titulo-historico">
                <MdShoppingBasket className="Historico_icons" />
                <h1>Meu histórico</h1>
              </div>
              <hr className="Historico_linha" />
              <div className="status-pedidos">
                <div id="Status_pedido1">
                  <div className="flex-pedidos">
                    <p>Pedidos</p>
                  </div>
                  <div className="Purple_stats" ></div>
                </div>
                <div id="Status_pedido2">
                  <div className="flex-pedidos">
                    <p>Ainda não entregue</p>
                  </div>
                  <div className="cinza"></div>
                </div>
                <div id="Status_pedido3">
                  <div className="flex-pedidos">
                    <p>Pendente</p>
                  </div>
                  <div className="cinza2"></div>
                </div>
              </div>
              <div id="PD-1">
                <div className="produtos-historico">
                  <div className="img-info">
                    <div className="img">
                      <img src={Produtos} alt="" />
                    </div>
                    <div className="infos">
                      <div className="Nome_produto_historico">
                        <p>
                          Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb
                        </p>
                      </div>
                      <div className="promos">
                        <div className="qtd-produto">
                          <p> Quantidade: 1</p>
                        </div>
                        <div className="produto-preco">
                          <p>R$ 3.799,99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detalhes-produtos">
                  <p className="bold">Número do pedido</p>
                  <p className="bold">Data</p>
                  <p className="bold">Status</p>
                  <p className="bold">Pagamento</p>
                  <p className="bold blue">
                    Mais detalhes
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      onClick={Clickinfo}
                    />
                    <label htmlFor="checkbox" className="checkbox-abrir">
                      <IoMdArrowDropdown id="flecha" />
                    </label>
                  </p>
                  <p>#12345678</p>
                  <p>12/12/12</p>
                  <p className="bold green">Concluído</p>
                  <p>Cartão de crédito</p>
                </div>
                <div id="detalhes">
                  <hr className="Historico_linha" />
                  <div className="status-content">
                    <div className="status-titulo">
                      <h1>
                        Status do pedido:{" "}
                        <span>Vendido e entregue por VirtualSkins!</span>
                      </h1>
                    </div>
                    <div className="grid-pedidos">
                      <div className="pedidos-img">
                        <BsCartCheckFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <div className="text-pedidos">
                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido recebido</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido em separação</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Nota fiscal emitida</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Produto expedido</p>
                          </div>
                        </div>
                      </div>
                      <div className="pedidos-img">
                        <HiInboxArrowDown className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Enviado para a transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <MdForklift className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Recebido pela transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <TbTruckDelivery className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em <br /> trânsito
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsBoxSeamFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em rota <br /> de entrega
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsFillCheckCircleFill className="Historico_icons" />
                      </div>
                      <div className="pedidos p1">
                        <p>Pedido entregue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="PD-2">
                <div className="produtos-historico">
                  <div className="img-info">
                    <div className="img">
                      <img src={Produtos} alt="" />
                    </div>
                    <div className="infos">
                      <div className="Nome_produto_historico">
                        <p>
                          Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb
                        </p>
                      </div>
                      <div className="promos">
                        <div className="qtd-produto">
                          <p> Quantidade: 1</p>
                        </div>
                        <div className="produto-preco">
                          <p>R$ 3.799,99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detalhes-produtos">
                  <p className="bold">Número do pedido</p>
                  <p className="bold">Data</p>
                  <p className="bold">Status</p>
                  <p className="bold">Pagamento</p>
                  <p className="bold blue">
                    Mais detalhes
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      onClick={Clickinfo}
                    />
                    <label htmlFor="checkbox" className="checkbox-abrir">
                      <IoMdArrowDropdown id="flecha" />
                    </label>
                  </p>
                  <p>#12345678</p>
                  <p>12/12/12</p>
                  <p className="bold yellow">Em andamento</p>
                  <p>Cartão de crédito</p>
                </div>
                <div id="detalhes">
                  <hr className="Historico_linha" />
                  <div className="status-content">
                    <div className="status-titulo">
                      <h1>
                        Status do pedido:{" "}
                        <span>Vendido e entregue por VirtualSkins!</span>
                      </h1>
                    </div>
                    <div className="grid-pedidos">
                      <div className="pedidos-img">
                        <BsCartCheckFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <div className="text-pedidos">
                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido recebido</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido em separação</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Nota fiscal emitida</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Produto expedido</p>
                          </div>
                        </div>
                      </div>
                      <div className="pedidos-img">
                        <HiInboxArrowDown className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Enviado para a transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <MdForklift className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Recebido pela transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <TbTruckDelivery className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em <br /> trânsito
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsBoxSeamFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em rota <br /> de entrega
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsFillCheckCircleFill className="Historico_icons" />
                      </div>
                      <div className="pedidos p1">
                        <p>Pedido entregue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="PD-3">
                <div className="produtos-historico">
                  <div className="img-info">
                    <div className="img">
                      <img src={Produtos} alt="" />
                    </div>
                    <div className="infos">
                      <div className="Nome_produto_historico">
                        <p>
                          Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb
                        </p>
                      </div>
                      <div className="promos">
                        <div className="qtd-produto">
                          <p> Quantidade: 1</p>
                        </div>
                        <div className="produto-preco">
                          <p>R$ 3.799,99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detalhes-produtos">
                  <p className="bold">Número do pedido</p>
                  <p className="bold">Data</p>
                  <p className="bold">Status</p>
                  <p className="bold">Pagamento</p>
                  <p className="bold blue">
                    Mais detalhes
                    <input
                      type="checkbox"
                      name=""
                      id="checkbox"
                      onClick={Clickinfo}
                    />
                    <label htmlFor="checkbox" className="checkbox-abrir">
                      <IoMdArrowDropdown id="flecha" />
                    </label>
                  </p>
                  <p>#12345678</p>
                  <p>12/12/12</p>
                  <p className="bold red">Pendente</p>
                  <p>Cartão de crédito</p>
                </div>
                <div id="detalhes">
                  <hr className="Historico_linha" />
                  <div className="status-content">
                    <div className="status-titulo">
                      <h1>
                        Status do pedido:{" "}
                        <span>Vendido e entregue por VirtualSkins!</span>
                      </h1>
                    </div>
                    <div className="grid-pedidos">
                      <div className="pedidos-img">
                        <BsCartCheckFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <div className="text-pedidos">
                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido recebido</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Pedido em separação</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Nota fiscal emitida</p>
                          </div>

                          <div className="flex-text-pedidos">
                            <BsCheckLg className="Check_icons" />
                            <p>Produto expedido</p>
                          </div>
                        </div>
                      </div>
                      <div className="pedidos-img">
                        <HiInboxArrowDown className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Enviado para a transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <MdForklift className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>Recebido pela transportadora</p>
                      </div>
                      <div className="pedidos-img">
                        <TbTruckDelivery className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em <br /> trânsito
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsBoxSeamFill className="Historico_icons" />
                        <div className="linha-azul"></div>
                      </div>
                      <div className="pedidos p1">
                        <p>
                          Mercadoria em rota <br /> de entrega
                        </p>
                      </div>
                      <div className="pedidos-img">
                        <BsFillCheckCircleFill className="Historico_icons" />
                      </div>
                      <div className="pedidos p1">
                        <p>Pedido entregue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns">
                <button className="bt Rastreio">
                  <FaTruck className="Btn_icons" />
                  Rastreio
                </button>
                <button className="bt Notafiscal">
                  <MdNoteAdd className="Btn_icons" />
                  Nota fiscal
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return <Error404/>;
  }
}
