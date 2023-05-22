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
    let detalhes = document.getElementById("Texto_avaliacao") as HTMLDivElement;
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
    let detalhes = document.getElementById("Texto_perguntas") as HTMLDivElement;
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
    let detalhes = document.getElementById("Texto_descricao") as HTMLDivElement;
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
            <span className="Texto_thin">VR / Óculos / com acessório &gt;</span>
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
                <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
              </div>
              <div className="Stars_compra">
                <img src={Stars} alt="" />
                <p className="Avaliacao">
                  {" "}
                  (4,8){" "}
                  <span className="Numero_avaliacao">1282 avaliações</span>
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
                  <span className="InfoCartaoRoxo_compra">R$00,00</span>
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
              <IoMdArrowDropdown className="Arrow_up" id="Arrow_up_descricao" />
            </div>
            <hr className="Desc_line" />
            <div id="Texto_descricao">
              <p className="Text_desc">
                Hardware avançado com gráfico de última geração para una
                experiencia impresionantes e inigualáveis Processador Qualcomm
                Snapdragon XR2 ultrarrápido com 6 GB de RAM e 128GB de memória
                Dois controles Oculus Touch remodelados com rastreamento das
                mãos de última geração. Alto-falantes integrados que fornecem
                áudio posicional 3D semelhante ao áudio de cinema. Espelhamento
                diretamente para uma TV compatível ou para o aplicativo Oculus
                para celular. Compatível com VR no PC usando o Oculus Link, um
                cabo de fibra óptica de alta velocidade (não incluido).
                Facilidade na configuração com o aplicativo Oculus para celular.
              </p>
              <div className="Title_of_desc">
                <h2 className="Titulo_da_desc">INFORMAÇÕES TÉCNICAS</h2>
              </div>
              <h2 className="Subtitle_desc"> Características: </h2>
              <ul className="List_descrição">
                <li>- Marca: Oculus</li>
                <li>- Modelo: 899-00182-02</li>
                <li className="Bold_list">Especificações:</li>
                <li>
                  - Processador Qualcomm Snapdragon XR2 ultrarrápido com 6 GB de
                  RAM e 128GB de memória
                </li>
                <li>
                  - Dois controles Oculus Touch remodelados com rastreamento das
                  mãos de última geração.
                </li>
                <li>
                  - Alto-falantes integrados que fornecem áudio posicional 3D
                  semelhante ao áudio de cinema.
                </li>
                <li>
                  - Espelhamento diretamente para uma TV compatível ou para o
                  aplicativo Oculus para celular.
                </li>
                <li>
                  - Compatível com VR no PC usando o Oculus Link, um cabo de
                  fibra óptica de alta velocidade (não incluído).
                </li>
                <li>
                  - Facilidade na configuração com o aplicativo Oculus para
                  celular.
                </li>
                <li>- Resolução de 1.832 x 1.920 pixels para cada olho.</li>
                <li className="Bold_list"> Conteúdo da embalagem: </li>
                <li>- VR Headset 2 controles 2 pilhas AA</li>
                <li>- Adaptador de energia Espaçador de óculos</li>
                <li>- Cabo de carregamento</li>
                <li className="Bold_list">Garantia do Fornecedor</li>
                <li>6 meses</li>
                <li className="Bold_list">Peso:</li>
                <li>2000 gramas (bruto com embalagem)</li>
              </ul>
            </div>
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
              <IoMdArrowDropdown className="Arrow_up" id="Arrow_up_perguntas" />
            </div>
            <hr className="Desc_line" />
            <div className="Pergunta_flex">
              <form action="" className="Form_perguntas">
                <div className="Flex_input_btn_resposta">
                  <input
                    type="text"
                    className="Input_cep Input_per-res"
                    placeholder="Faça uma pergunta"
                  />
                  <button type="submit" className="Btn_perguntas">
                    PERGUNTAR
                  </button>
                </div>
                <div className="Flex_perguntas">
                  <label htmlFor="check_pergunta" className=""></label>
                  <input type="checkbox" name="" id="check_pergunta" />
                  Perguntar como usuário anônimo
                </div>
              </form>
            </div>
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
            <div id="Texto_avaliacao">
              <div className="Flex_avaliacao">
                <h1 className="avaliacaoh1">4.8</h1>
                <div>
                  <img src={Stars} alt="" />
                  <p className="Pavaliacao">(1282 AVALIAÇÕES)</p>
                </div>
              </div>
              <hr className="Line_avaliacao" />
              <div className="Flex2_avaliacao">
                <h1>
                  Opinião do usuário <span className="Date_op">Data</span>
                </h1>
                <img src={Stars} alt="" />
              </div>
              <div className="User_name">
                <p>Nome do usuário</p>
              </div>
              <div className="Geral_opi">
                <p>Opinião geral do usuário</p>
              </div>
              <div className="Pros_user">
                <p>Pros do usuário</p>
              </div>
              <div className="Contra_user">
                <p>Contras do usuário</p>
              </div>
              <hr className="End_line_user" />
            </div>
          </div>
        </div>
        <Rodape />
      </main>
    </div>
  );
}
