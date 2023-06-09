import "./destaques-1.sass";
import Stars from "/src/assets/IMG/img-produtos/Stars.svg";
import Produtos from "/src/assets/IMG/img-produtos/produto1.svg";
import Carrinho from "/src/assets/IMG/img-produtos/Carrinho.svg";
import { FaHeart } from "react-icons/fa";
import { DestaqueNome, DestaqueProduto } from "./styles";

export default function destaques_1() {
    return (
        <DestaqueProduto href={"/compra"} className="destaque-produto">
            <div className="Favoritar_produto" id="Favorito_id">
                <FaHeart className="Favorito_icon"/>
            </div>
            <div className="promos-destaque">
                <div className="stars-destaque">
                    <img src={Stars} alt="" />
                </div>
                <div className="produtos-restantes-destaque">
                    <p>
                        {" "}
                        Restam <br />
                        <span>30</span> <br />
                        unid.
                    </p>
                </div>
                <div className="descontos-destaque">
                    <p>
                        30% <br />
                        OFF
                    </p>
                </div>
            </div>

            <div className="infos-destaque">
                <div className="img-destaque">
                    <div className="produto-imagem-destaque">
                        <img src={Produtos} alt="" />
                    </div>
                </div>
                <div className="destaque-nome">
                    <DestaqueNome>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</DestaqueNome>
                    <div className="destaque-preco">
                        <p>R$ 3.799,99</p>
                    </div>
                </div>
            </div>
            <div className="comprar-destaque">
                <div className="btnComprar-destaque">
                    <button type="submit">
                        <a href="#">
                            {" "}
                            <img src={Carrinho} alt="" />{" "}
                        </a>
                    </button>
                </div>
            </div>
        </DestaqueProduto>
    );
}
