import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Rodape from "./components/Footer/footer";
import "../sass/conta.sass";
import { useEffect } from "react";
import { MdDataset } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { HiSortAscending } from "react-icons/hi";

export default function Account() {
    return (
        <div>
            <Navbar_logado />
            <main className="minha-conta">
                <div className="conta-wrapper">
                    <div className="dados-content">
                        <div className="menu">
                            <div className="menu-flex">
                                <div className="home">
                                    <a href="/PAGES/minha-conta.html">
                                        <MdHome className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                                <div className="favs">
                                    <a href="/PAGES/lista-de-desejos.html">
                                        <FaHeart className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                                <div className="history">
                                    <a href="/PAGES/historico.html">
                                        <HiSortAscending className="IconsConta2" />
                                    </a>
                                    <p className="desc-menu">HOME</p>
                                </div>
                            </div>
                        </div>
                        <div className="conta-cupom">
                            <div className="conta-content">
                                <div className="imagem-conta">
                                    {" "}
                                    <img src="https://i1.sndcdn.com/artworks-bEMhExX1BoD6F5Tu-atmOiw-t500x500.jpg" />
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
                                    <button type="submit">
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
