import "../sass/compra.sass";

import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Rodape from "./components/Footer/footer";
import Stars from "/src/assets/IMG/img-produtos/Stars.svg"
import { MdShoppingCart } from "react-icons/md"

export default function Compra() {
    return (
        <div>
            <main className="Compra">
                <Navbar_logado />
                <div className="Title_compra">
                    <p className="Texto_bold">
                        Você esta em:
                        <span className="Texto_thin">
                            VR / Óculos / com acessório &gt;
                        </span>
                        <span className="Texto_roxo">código #234234</span>
                    </p>
                    <hr className="Line_compra" />
                </div>

                <div className="Grid_compra">
                    <div className="Produto_compra">
                        <div className="Imagens_compra">
                            <div className="Visualizar">
                                <div className="Quadrado_visualizar"></div>
                                <div className="Quadrado_visualizar"></div>
                                <div className="Quadrado_visualizar"></div>
                                <div className="Quadrado_visualizar"></div>
                            </div>
                            <div className="Produto_visualizado">
                                <div className="Quadrado_visualizado"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Info_compra">
                        <div className="Texto_stars_compra">
                            <div className="Texto_compras">
                                <p>
                                    Óculos Realidade Virtual VR Oculus Meta
                                    Quest 2 256gb
                                </p>
                            </div>
                            <div className="Stars_compra">
                                <img src={Stars} alt="" />
                                <p className="Avaliacao"> (4,8) <span className="Numero_avaliacao">1282 avaliações</span></p>
                            </div>
                        </div>
                        <div className="Grid_infos">
                            <div className="Texto_informacoes">
                                <h1 className="Nome_compra">R$ 3.909,22</h1>
                                <p className="Desconto_compra">À vista no PIX com até 15% de desconto</p>
                                <div className="PurpleLine_compra"></div>
                                <h3 className="Cartao_compra">R$4.000,00</h3>
                                <p className="InfoCartao_compra">No cartão de <span className="InfoCartaoRoxo_compra">R$00,00</span>por 10x sem juros</p>
                            </div>
                            <div className="Button_compra">
                                <input type="submit" value="Comprar"  className="Comprar_compra" />
                                <input type="submit" value="Compartilhar"  className="Compartilhar_compra"/>
                            </div>
                        </div>
                    </div>
                    <div className="Calc_cep">
                        <input type="text" name="" id="" placeholder="Insira seu CEP..." className="Input_cep"/>
                        <button type="submit" className="Ok_cep">OK</button>
                    </div>
                    <div className="Produtos_similares"></div>
                </div>

                <div className="Descricao_compra"></div>
                <Rodape />
            </main>
        </div>
    );
}
