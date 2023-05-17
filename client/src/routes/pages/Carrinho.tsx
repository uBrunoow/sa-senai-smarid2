import "../sass/carrinho.sass";

import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Footer from "./components/Footer/footer";
import Produtos from "/src/assets/IMG/img-produtos/produto1.svg";

import { MdArrowLeft } from 'react-icons/md'
import { MdShoppingCart } from "react-icons/md"
import { TbTrashXFilled } from "react-icons/tb"
import { IoLocationSharp } from "react-icons/io5"
import { TbDiscount } from "react-icons/tb"

import { useRef, useEffect } from "react";

export default function Carrinho() {

    const incrementoRef = useRef(null);
    const contadorRef = useRef(null);
    const decrementoRef = useRef(null);

    useEffect(() => {
        
        if (
            incrementoRef.current &&
            contadorRef.current &&
            decrementoRef.current
        ) {
            const incremento = incrementoRef.current as HTMLDivElement;
            const contador = contadorRef.current as HTMLDivElement;
            const decremento = decrementoRef.current as HTMLDivElement;
            let qtd = 0

            decremento.addEventListener('click', function(){
                if(qtd > Number(contador.getAttribute('min'))){
                    qtd--;
                    contador.setAttribute('value', qtd)
                }
            })

            incremento.addEventListener('click', function(){
                if(qtd < Number(contador.getAttribute('max'))){
                    qtd++;
                    contador.setAttribute('value', qtd)
                }
            })

        }
    }, []);

    return (
        <div className="Body_page">
            <Navbar_logado />
            <main className="carrinho">
                <div className="carrinho-content">
                    <div className="title-carrinho">
                        <div className="title-h1">
                            <MdArrowLeft className="bx bx-chevron-left "/>
                            <a href={"/pesquisa"} className="Link_comprar">
                                <h1>Continuar comprando</h1>
                            </a>
                        </div>
                        <div className="title-img">
                            <div className="cart-title">
                                <h1>Meu carrinho</h1>
                                <MdShoppingCart className="bx bxs-cart"/>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <hr className="Linha_carrinho" />
                    <div className="carrinho-resumo">
                        <div className="carrinho-produto">
                            <div className="produto">
                                <img src={Produtos} />
                                <div className="text-produto">
                                    <h1>
                                        Óculos Realidade Virtual VR Oculus Meta
                                        Quest 2 256gb
                                    </h1>
                                    <p>Com desconto de 10%</p>
                                    <div className="h1-span">
                                        <h3>
                                            À vista no pix:{" "}
                                            <span>R$ 3.799,99</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="quantidade-produto">
                                    <div className="up-down">
                                        <button id="decremento" className="Btn-updown" ref={decrementoRef}>-</button>
                                        <input type="number" id="qtd" min={1} max={500} readOnly ref={contadorRef}/>
                                        <button id="incremento" className="Btn-updown" ref={incrementoRef}>+</button>
                                    </div>
                                    <div className="remove">
                                        <TbTrashXFilled className="bx bx-trash trexi"/>
                                        <p>REMOVE</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="Algumalinhaaleatoria"/>
                            <div className="clean-address">
                                <div className="address">
                                    <button className="Address-button">
                                        <IoLocationSharp className="Location"/>
                                        <a href="" className="Link-address">Selecione o seu endereço</a>
                                    </button>
                                </div>
                                <div className="clean-products">
                                    <button className="clean-button">
                                        <TbTrashXFilled className="trexi"/>
                                        <a href="" className="UmlinkQuAlquer">Remover todos os produtos</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="produto-resumo">
                            <div className="resumo-title">
                                <h1>Resumo</h1>
                            </div>
                            <div className="frete-preco">
                                <p>Valor dos produtos:</p>
                                <hr />
                                <p>Valor do frete:</p>
                            </div>
                            <div className="resumo-resumo">
                                <p>à vista</p>
                                <h1>R$3799,99</h1>
                                <p>no PIX 15% de desconto</p>
                                <div className="purple-line"></div>
                                <h3>R$4310,60</h3>
                                <p className="less-text">
                                    em até 12x de R$150,40 sem juros no cartão
                                </p>
                            </div>
                            <div className="finalizar-pedido">
                                <button className="Fim-button">
                                    <a href="" className="Finalize">FINALIZAR PEDIDO</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cupom-desconto">
                        <div className="title-cupom-desconto">
                            <TbDiscount className="bx bxs-discount"/>
                            <h1>Cupom de desconto</h1>
                        </div>
                        <form action="">
                            <div className="textInputWrapper">
                                <input
                                    placeholder="Cupom de desconto"
                                    type="text"
                                    className="textInput"
                                />
                            </div>
                            <input
                                type="submit"
                                value="APLICAR O CUPOM"
                                className="input-submit"
                            />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
