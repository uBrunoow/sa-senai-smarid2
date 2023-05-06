import "../sass/compra.sass";

import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Rodape from "./components/Footer/footer";
import Stars from "/src/assets/IMG/img-produtos/Stars.svg";
import { BsCheckLg } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

export default function Compra() {
    function Mostrar_Texto_Avaliacao() {
        let myImage = document.getElementById(
            "Arrow_up_avaliacoes"
        ) as HTMLImageElement;
        let detalhes = document.getElementById(
            "Texto_avaliacao"
        ) as HTMLDivElement;
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

    function Mostrar_Texto_Perguntas() {
        let myImage = document.getElementById(
            "Arrow_up_perguntas"
        ) as HTMLImageElement;
        let detalhes = document.getElementById(
            "Texto_perguntas"
        ) as HTMLDivElement;
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

    function Mostrar_Texto_Descricao() {
        let myImage = document.getElementById(
            "Arrow_up_descricao"
        ) as HTMLImageElement;
        let detalhes = document.getElementById(
            "Texto_descricao"
        ) as HTMLDivElement;
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

    return (
        <div className="Body_page">
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
                                <p className="Avaliacao">
                                    {" "}
                                    (4,8){" "}
                                    <span className="Numero_avaliacao">
                                        1282 avaliações
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="Grid_infos">
                            <div className="Texto_informacoes">
                                <h1 className="Nome_compra">R$ 3.909,22</h1>
                                <p className="Desconto_compra">
                                    À vista no PIX com até 15% de desconto
                                </p>
                                <div className="PurpleLine_compra"></div>
                                <h3 className="Cartao_compra">R$4.000,00</h3>
                                <p className="InfoCartao_compra">
                                    No cartão de{" "}
                                    <span className="InfoCartaoRoxo_compra">
                                        R$00,00
                                    </span>
                                    por 10x sem juros
                                </p>
                            </div>
                            <div className="Button_compra">
                                <button className="Comprar_compra">
                                    <MdShoppingCart />
                                    <span>Comprar</span>
                                </button>
                                {/* BOTÃO DE COMPARTILHAR */}

                                <button className="btn-cssbuttons">
                                    <span>Compartilhar</span>
                                    <span>
                                        <IoMdShare className="Icon_compartilhar" />
                                    </span>
                                    <ul>
                                        <li>
                                            <a href="https://twitter.com/SumethWrrn">
                                                <AiOutlineTwitter className="Icon_compartilhar" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://codepen.io/sharpth">
                                                <AiOutlineInstagram className="Icon_compartilhar" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/SharpTH">
                                                <AiOutlineGithub className="Icon_compartilhar" />
                                            </a>
                                        </li>
                                    </ul>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="Calc_cep">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Insira seu CEP..."
                            className="Input_cep"
                        />
                        <button type="submit" className="Ok_cep">
                            <BsCheckLg className="Check_cep" />
                            <p className="Text_ok_cep">OK</p>
                        </button>
                    </div>
                    <div className="Produtos_similares">
                        <h1 className="Titulo_produtos_similares">
                            <RiShoppingBag3Fill className="Icons_produtos_similares" />
                            Produtos Similares
                        </h1>
                        <div className="Produtos_similares_compra"></div>
                    </div>
                </div>

                <div className="Descricao_compra">
                    <div className="Descricao">
                        <div
                            className="titleDesc"
                            id="Descricao_arrowUp"
                            onClick={Mostrar_Texto_Descricao}
                        >
                            <h1 className="Title_descricao">
                                <AiFillFileText className="Icon_desc" />
                                DESCRIÇÃO DO PRODUTO
                            </h1>
                            <IoMdArrowDropdown
                                className="Arrow_up"
                                id="Arrow_up_descricao"
                            />
                        </div>
                        <hr className="Desc_line" />
                        <p className="Text_desc" id="Texto_descricao">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa fugiat est et quasi, alias repudiandae
                            vel aut delectus in quisquam suscipit dolorum iure
                            architecto enim repellat voluptas. Ad, similique.
                            Sapiente? Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Iste delectus velit exercitationem
                            labore consectetur, incidunt, eos doloremque
                            perferendis, deleniti illum id repellendus sequi
                            numquam ad? Repudiandae eaque similique eius magni.
                        </p>
                    </div>

                    <div className="Perguntas_respostas">
                        <div
                            className="titleDesc"
                            id="Perguntas_arrowUp"
                            onClick={Mostrar_Texto_Perguntas}
                        >
                            <h1 className="Title_descricao">
                                <MdQuestionAnswer className="Icon_desc" />
                                PERGUNTAS E RESPOSTAS
                            </h1>
                            <IoMdArrowDropdown
                                className="Arrow_up"
                                id="Arrow_up_perguntas"
                            />
                        </div>
                        <hr className="Desc_line" />
                        <p className="Text_desc" id="Texto_perguntas">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa fugiat est et quasi, alias repudiandae
                            vel aut delectus in quisquam suscipit dolorum iure
                            architecto enim repellat voluptas. Ad, similique.
                            Sapiente? Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Iste delectus velit exercitationem
                            labore consectetur, incidunt, eos doloremque
                            perferendis, deleniti illum id repellendus sequi
                            numquam ad? Repudiandae eaque similique eius magni.
                        </p>
                    </div>

                    <div className="Avaliacoes_usuarios">
                        <div
                            className="titleDesc"
                            id="Avaliacoes_arrowUp"
                            onClick={Mostrar_Texto_Avaliacao}
                        >
                            <h1 className="Title_descricao">
                                <MdAssessment className="Icon_desc" />
                                AVALIAÇÃO DOS USUÁRIOS
                            </h1>
                            <IoMdArrowDropdown
                                className="Arrow_up"
                                id="Arrow_up_avaliacoes"
                            />
                        </div>
                        <hr className="Desc_line" />
                        <p className="Text_desc" id="Texto_avaliacao">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa fugiat est et quasi, alias repudiandae
                            vel aut delectus in quisquam suscipit dolorum iure
                            architecto enim repellat voluptas. Ad, similique.
                            Sapiente? Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Iste delectus velit exercitationem
                            labore consectetur, incidunt, eos doloremque
                            perferendis, deleniti illum id repellendus sequi
                            numquam ad? Repudiandae eaque similique eius magni.
                        </p>
                    </div>
                </div>
                <Rodape />
            </main>
        </div>
    );
}
