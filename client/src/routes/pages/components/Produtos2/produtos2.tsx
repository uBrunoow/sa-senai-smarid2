import "./produtos2.sass";

import Stars from "/src/assets/IMG/img-produtos/Stars.svg";
import Prods from "/src/assets/IMG/img-produtos/produto1.svg";
import { MdShoppingCart } from "react-icons/md";

export default function Produtos() {
    return (
        <main className="produtos">
            <div className="segundo-produto">
                <div className="promos2">
                    <div className="stars2">
                        <img src={Stars} alt="" />
                    </div>
                    <div className="produtos-restantes2">
                        <p>
                            {" "}
                            Restam <br />
                            <span>30</span> <br />
                            unid.
                        </p>
                    </div>
                    <div className="descontos2">
                        <p>
                            30% <br />
                            OFF
                        </p>
                    </div>
                </div>
                <div className="img2">
                    <div className="produto-imagem">
                        <img src={Prods} alt="" />
                    </div>
                </div>
                <div className="infos2">
                    <div className="produto-nome2">
                        <p>
                            Óculos Realidade Virtual VR Oculus Meta Quest 2
                            256gb
                        </p>
                    </div>
                    <div className="produto-preco2">
                        <p>R$ 3.799,99</p>
                    </div>
                </div>
                <div className="comprar2">
                    <div className="btnComprar2">
                        <button type="submit">
                            <a href="#">
                                <MdShoppingCart className="CarrinhoComprar"/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
