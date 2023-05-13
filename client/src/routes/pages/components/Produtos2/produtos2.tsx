import Stars from "/src/assets/IMG/img-produtos/Stars.svg";
import Produtos from "/src/assets/IMG/img-produtos/produto1.svg";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import '../Produtos/Swiper-2/styles.css'

// SASS É O MESMO ARQUIVO DO PRODUTOS 1

export default function Produtos2() {
    return (
        <a href={"/compra"} className="Primeiro_produto">
            <div className="Favorite_produto" id="Favorite_id">
                <FaHeart className="Favorite_icon" />
            </div>
            <div className="Promos">
                <div className="Stars_produto">
                    <img src={Stars} alt="" />
                </div>
                <div className="Produtos_restantes">
                    <p>
                        {" "}
                        Restam <br />
                        <span>30</span> <br />
                        unid.
                    </p>
                </div>
                <div className="Descontos">
                    <p>
                        30% <br />
                        OFF
                    </p>
                </div>
            </div>
            <div className="Imagem_do_produto">
                <div className="produto-imagem">
                    <img src={Produtos} alt="" />
                </div>
            </div>
            <div className="InformacoesProduto">
                <div className="Produto_nome">
                    <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
                </div>
                <div className="Preco_produto">
                    <p>R$ 3.799,99</p>
                </div>
            </div>
            <div className="Botao_comprar">
                <div className="btnComprar">
                    <button type="submit" className="BtnFlexComprar">
                        <a href="#">
                            {" "}
                            <MdShoppingCart className="Cart_Shopping_produto" />{" "}
                        </a>
                    </button>
                </div>
            </div>
        </a>
    );
}
