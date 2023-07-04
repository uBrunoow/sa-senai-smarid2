// Importar estilo do sass
import "./favorito.sass";

// Importar imagens
import Produto from "/src/assets/IMG/img-produtos/produto1.svg";
import Stars from "/src/assets/IMG/img-produtos/Stars.svg";

// Importar icones
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function Favorito1() {
  return (
    <div className="favoritos-wrapper">
      <div className="produto-content">
        <div className="img-info">
          <div className="img">
            <div className="produto-imagem">
              <img src={Produto} alt="" />
            </div>
          </div>
          <div className="infos">
            <div className="produto-nome">
              <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
            </div>
            <div className="promos">
              <div className="estrelas">
                <img src={Stars} alt="" />
              </div>
              <div className="produto-preco">
                <p>R$ 3.799,99</p>
              </div>
              <div className="descontos">
                <p>
                  FRETE <br />
                  GRATIS
                </p>
              </div>
            </div>
          </div>
          <div className="comprar">
            <div className="favoritos-favoritos">
              <FaHeart id="P1" />
            </div>
            <div className="btnComprar-favoritos">
              <button type="submit">
                <a href="/compra">
                  {" "}
                  <MdShoppingCart className="Cart" />
                  <span className="comprar-favorito">Comprar</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
