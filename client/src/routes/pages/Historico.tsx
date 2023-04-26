import "../sass/historico.sass";

import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Footer from "./components/Footer/footer";
import Produtos from "/src/assets/IMG/img-produtos/produto1.svg";

import { MdShoppingBasket } from "react-icons/md"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTruck } from "react-icons/fa"
import { MdNoteAdd } from "react-icons/md"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { BsBoxSeamFill } from "react-icons/bs"
import { TbTruckDelivery } from "react-icons/tb"
import { MdForklift } from "react-icons/md"
import { HiInboxArrowDown } from "react-icons/hi2"
import { BsCartCheckFill } from "react-icons/bs"
import { BsCheckLg } from "react-icons/bs"

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
        if (detalhes.style.display == "block") {
            detalhes.style.display = "none";
        } else {
            detalhes.style.display = "block";
        }
    }

    return (
        <div>
            <Navbar_logado />
            <main className="historico">
                <div className="historico-wrapper">
                    <div className="historico-content">
                        <div className="titulo-historico">
                            <MdShoppingBasket className="Historico_icons"/>
                            <h1>Meu histórico</h1>
                        </div>
                        <hr className="Historico_linha" />
                        <div className="status-pedidos">
                            <div className="flex-pedidos">
                                <p>Pedidos</p>
                                <p>Ainda não entregue</p>
                                <p>Pendente</p>
                            </div>
                            <div className="status">
                                <div className="azul"></div>
                                <div className="cinza"></div>
                            </div>
                        </div>
                        <div className="produtos-historico">
                            <div className="img-info">
                                <div className="img">
                                    <img
                                        src={Produtos}
                                        alt=""
                                    />
                                </div>
                                <div className="infos">
                                    <div className="produto-nome">
                                        <p>
                                            Óculos Realidade Virtual VR Oculus
                                            Meta Quest 2 256gb
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
                                <label
                                    htmlFor="checkbox"
                                    className="checkbox-abrir"
                                >
                                    <IoMdArrowDropdown
                                        id="flecha"
                                    />
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
                                        <span>
                                            Vendido e entregue por VirtualSkins!
                                        </span>
                                    </h1>
                                </div>
                                <div className="grid-pedidos">
                                    <div className="pedidos-img">
                                        <BsCartCheckFill className="Historico_icons"/>
                                        <div className="linha-azul"></div>
                                    </div>
                                    <div className="pedidos p1">
                                        <div className="text-pedidos">
                                            <div className="flex-text-pedidos">
                                                <BsCheckLg className="Check_icons"/>
                                                <p>Pedido recebido</p>
                                            </div>

                                            <div className="flex-text-pedidos">
                                                <BsCheckLg className="Check_icons"/>
                                                <p>Pedido em separação</p>
                                            </div>

                                            <div className="flex-text-pedidos">
                                                <BsCheckLg className="Check_icons"/>
                                                <p>Nota fiscal emitida</p>
                                            </div>

                                            <div className="flex-text-pedidos">
                                                <BsCheckLg className="Check_icons"/>
                                                <p>Produto expedido</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pedidos-img">
                                        <HiInboxArrowDown className="Historico_icons"/>
                                        <div className="linha-azul"></div>
                                    </div>
                                    <div className="pedidos p1">
                                        <p>Enviado para a transportadora</p>
                                    </div>
                                    <div className="pedidos-img">
                                        <MdForklift className="Historico_icons"/>
                                        <div className="linha-azul"></div>
                                    </div>
                                    <div className="pedidos p1">
                                        <p>Recebido pela transportadora</p>
                                    </div>
                                    <div className="pedidos-img">
                                        <TbTruckDelivery className="Historico_icons"/>
                                        <div className="linha-azul"></div>
                                    </div>
                                    <div className="pedidos p1">
                                        <p>
                                            Mercadoria em <br /> trânsito
                                        </p>
                                    </div>
                                    <div className="pedidos-img">
                                        <BsBoxSeamFill className="Historico_icons"/>
                                        <div className="linha-azul"></div>
                                    </div>
                                    <div className="pedidos p1">
                                        <p>
                                            Mercadoria em rota <br /> de entrega
                                        </p>
                                    </div>
                                    <div className="pedidos-img">
                                        <BsFillCheckCircleFill className="Historico_icons"/>
                                    </div>
                                    <div className="pedidos p1">
                                        <p>Pedido entregue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="bt Rastreio">
                                <FaTruck className="Btn_icons"/>
                                Rastreio
                            </button>
                            <button className="bt Notafiscal">
                                <MdNoteAdd className="Btn_icons"/>
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
