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
import { useRef, useEffect } from "react";

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

  const Status1Ref = useRef(null);
  const Status2Ref = useRef(null);
  const Status3Ref = useRef(null);
  const PurpleStatsRef = useRef(null);
  const GrayRef = useRef(null);
  const GrayRef2 = useRef(null);

  useEffect(() => {
    if (
      Status1Ref.current &&
      Status2Ref.current &&
      Status3Ref.current &&
      GrayRef.current &&
      GrayRef2.current &&
      PurpleStatsRef.current
    ) {
      const Status1 = Status1Ref.current as HTMLDivElement;
      const Status2 = Status2Ref.current as HTMLDivElement;
      const Status3 = Status3Ref.current as HTMLDivElement;
      const GrayS = GrayRef.current as HTMLDivElement;
      const GrayS2 = GrayRef2.current as HTMLDivElement;
      const PurpleS = PurpleStatsRef.current as HTMLDivElement;

      Status1.addEventListener("click", () => {
        PurpleS.classList.add("Purple_stats");
        PurpleS.classList.remove("cinza");
        GrayS.classList.add("cinza");
        GrayS.classList.remove("Purple_stats");
        GrayS2.classList.add("cinza2");
        GrayS2.classList.remove("Purple_stats");
      });

      Status2.addEventListener("click", () => {
        GrayS.classList.add("Purple_stats");
        GrayS.classList.remove("cinza");
        PurpleS.classList.remove("Purple_stats");
        PurpleS.classList.add("cinza");
        GrayS2.classList.add("cinza2");
        GrayS2.classList.remove("Purple_stats");
      });

      Status3.addEventListener("click", () => {
        GrayS2.classList.add("Purple_stats");
        GrayS2.classList.remove("cinza2");
        GrayS.classList.add("cinza");
        GrayS.classList.remove("Purple_stats");
        PurpleS.classList.remove("Purple_stats");
        PurpleS.classList.add("cinza");
      });
    }
  }, []);

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
                <div id="Status_pedido1" ref={Status1Ref}>
                  <div className="flex-pedidos">
                    <p>Pedidos</p>
                  </div>
                  <div className="Purple_stats" ref={PurpleStatsRef}></div>
                </div>
                <div id="Status_pedido2" ref={Status2Ref}>
                  <div className="flex-pedidos">
                    <p>Ainda não entregue</p>
                  </div>
                  <div className="cinza" ref={GrayRef}></div>
                </div>
                <div id="Status_pedido3" ref={Status3Ref}>
                  <div className="flex-pedidos">
                    <p>Pendente</p>
                  </div>
                  <div className="cinza2" ref={GrayRef2}></div>
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
}
