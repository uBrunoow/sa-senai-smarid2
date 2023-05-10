import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Rodape from "./components/Footer/footer";
import "../sass/conta.sass";
import { useEffect } from "react";
import { MdDataset } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { HiSortAscending } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdCamera } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";

export default function Account() {
    var BlackBack = document.createElement("div");
    BlackBack.style.width = "100%";
    BlackBack.style.height = "100vh";
    BlackBack.style.background = "#00000090";
    BlackBack.style.position = "absolute";
    BlackBack.style.zIndex = "999";

    function ChangePhoto() {
        var ChooseImg = document.getElementById("Choose_id") as HTMLDivElement;
        var MinhaConta = document.getElementById("Conta_id") as HTMLDivElement;

        if (ChooseImg.style.display == "none") {
            ChooseImg.style.display = "block";
            MinhaConta.prepend(BlackBack);
            MinhaConta.style.overflowY = "hidden";
        } else {
            ChooseImg.style.display = "block";
        }
    }
    function FecharAba() {
        var ChooseImg = document.getElementById("Choose_id") as HTMLDivElement;
        ChooseImg.style.display = "none";
        BlackBack.remove();
    }

    function MudarSenha() {}

    return (
        <div className="Body_page" id="Conta_id">
            <Navbar_logado />
            <main className="minha-conta">
                <div className="conta-wrapper">
                    <div className="dados-content">
                        <div className="menu">
                            <div className="menu-flex">
                                <div className="home">
                                    <a href={`/conta`}>
                                        <MdHome className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                                <div className="favs">
                                    <a href={`/lista-de-desejos`}>
                                        <FaHeart className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                                <div className="history">
                                    <a href={`/historico`}>
                                        <HiSortAscending className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                            </div>
                        </div>
                        <div id="Choose_id" className="Choose_img">
                            <div className="title_choose">
                                <div className="Title_icons">
                                    <IoMdCamera className="Icon_choose" />
                                    <h1 className="Chosse_h1">
                                        Atualizar sua foto de perfil
                                    </h1>
                                </div>
                                <div
                                    className="Close_icons"
                                    id="Close_img"
                                    onClick={FecharAba}
                                >
                                    <AiFillCloseCircle className="icon_fechar" />
                                </div>
                            </div>
                            <hr className="Choose_line" />
                            <div className="fotos_perfil">
                                <AiOutlineCloudUpload className="Cloud_icon" />
                                <p>
                                    Faça o upload da imagem que deseja adicionar
                                    ao seu perfil.
                                </p>
                                <label
                                    className="File_upload"
                                    htmlFor="arquivo"
                                >
                                    Carregar foto
                                </label>
                                <input
                                    type="file"
                                    name="arquivo"
                                    id="arquivo"
                                />
                            </div>
                        </div>

                        <div className="conta-cupom">
                            <div className="conta-content">
                                <div className="imagem-conta" id="Imagem_hover">
                                    <img src="https://i1.sndcdn.com/artworks-bEMhExX1BoD6F5Tu-atmOiw-t500x500.jpg" />
                                    <div
                                        className="Pencil"
                                        id="Pencil_id"
                                        onClick={ChangePhoto}
                                    >
                                        <HiPencilAlt className="Pencil_icon" />
                                    </div>
                                </div>

                                <div className="description-conta">
                                    <h1 className="nome-conta">Olá, Cliente</h1>
                                    <p className="email-conta">
                                        nome.user@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="cupom-content">
                                <div className="description-cupom">
                                    <h1 className="nome-conta">
                                        Cupons de desconto
                                    </h1>
                                    <div className="input-cupom">
                                        <input
                                            type="text"
                                            className="textoBusca"
                                            placeholder="Cupom"
                                        />
                                        <button
                                            type="submit"
                                            className="imgCupons"
                                        >
                                            {" "}
                                            <a href=""> RESGATAR CUPOM </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dados-titulo">
                            <MdDataset className="IconsConta" />
                            <h1>Meus dados</h1>
                        </div>
                        <hr className="line" />
                        <div className="re-password" id="MudarSenha">
                            <div className="re-titulo">
                                <div className="Title-icon">
                                    <MdOutlinePassword className="Re_icon" />
                                    <h1 className="reh1">
                                        Redefinir sua senha
                                    </h1>
                                </div>
                                <div
                                    className="Close_icons"
                                    id="Close_img"
                                    onClick={FecharAba}
                                >
                                    <AiFillCloseCircle className="icon_fechar" />
                                </div>
                            </div>
                            <div className="re-form">
                                <form>
                                    <p className="ReP">Preencha os campos abaixo para redefinir a sua senha</p>
                                    <div className="lines">
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    required
                                                />
                                                <label>
                                                    Digite sua nova senha
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lines">
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    required
                                                />
                                                <label>
                                                    Confirmar sua nova senha
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Flex-button-repass">
                                        <label
                                            className="Redefine_pass"
                                            htmlFor="repass"
                                        >
                                            Redefinir
                                        </label>
                                        <input
                                            type="submit"
                                            name="repass"
                                            id="repass"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="form-box login">
                                <form>
                                    <div className="lines">
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input type="text" required />
                                                <label>Nome completo</label>
                                            </div>
                                        </div>
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input type="text" required />
                                                <label>CPF</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lines">
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input type="tel" required />
                                                <label>Telefone</label>
                                            </div>
                                        </div>
                                        <div className="nome-completo">
                                            <div className="input-box">
                                                <input type="email" required />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="btn-repassword">
                                    <button type="submit" onClick={MudarSenha}>
                                        REDEFINIR SENHA
                                    </button>
                                </div>
                                <div className="enderecos-content">
                                    <div className="enderecos-titulo">
                                        <MdLocationOn className="IconsConta" />
                                        <h1>Endereços</h1>
                                    </div>
                                    <hr className="line" />
                                    <div className="flex-endereco">
                                        <div className="overlay-1"></div>
                                        <div className="endereco-principal">
                                            <div className="enderecos-infos">
                                                <h1>Endereço Principal</h1>
                                                <h2>(PADRÃO)</h2>
                                            </div>
                                            <div className="enderecos-subinfos">
                                                <p>
                                                    {" "}
                                                    RUA ARNALDO PINTO DA ROÇA
                                                    <br />
                                                    Número: 6889
                                                    <br />
                                                    CEP 89234-881, CARPAZINHA-SR
                                                </p>
                                            </div>
                                            <div className="endereco-editar">
                                                <a href="">EDITAR</a>
                                            </div>
                                        </div>
                                        <div className="overlay-2"></div>
                                        <div className="endereco-outros">
                                            <div className="enderecos-infos">
                                                <h1>Endereço Secundário</h1>
                                            </div>
                                            <div className="enderecos-subinfos">
                                                <p>
                                                    {" "}
                                                    RUA ARNALDO PINTO DA ROÇA
                                                    <br />
                                                    Número: 6889
                                                    <br />
                                                    CEP 89234-881, CARPAZINHA-SR
                                                </p>
                                            </div>
                                            <div className="endereco-editar">
                                                <a href="">EDITAR</a>
                                                <a href="">EXCLUIR</a>
                                                <a href="" className="padrao">
                                                    DEIXAR PADRÃO
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-repassword">
                                        <button type="submit">
                                            ADICIONAR ENDEREÇO
                                        </button>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <div className="btn-save">
                                        <button type="submit">
                                            SALVAR ALTERAÇÕES
                                        </button>
                                    </div>
                                    <div className="btn-reset">
                                        <button type="reset">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="refresh-button"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                                                    fill="none"
                                                    stroke="#D2042D"
                                                    stroke-linecap="round"
                                                    stroke-miterlimit="10"
                                                    stroke-width="32"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="#D2042D"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="32"
                                                    d="M256 58l80 80-80 80"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Rodape />
        </div>
    );
}
