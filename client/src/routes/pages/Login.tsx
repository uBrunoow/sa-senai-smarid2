// ESTILOS
import "../sass/login.sass";
import "../css/login.css";

// IMAGENS
import LostOnline from "/src/assets/IMG/lost-online.svg";
import Programming from "/src/assets/IMG/programming.svg";

// ICONS
import { BsFillPersonFill } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { IoMdFingerPrint } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai"

// TS
import { useRef, useEffect } from "react";

export default function Login() {
    const sign_in_btn = useRef(null);
    const sign_up_btn = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (
            sign_up_btn.current &&
            sign_in_btn.current &&
            containerRef.current
        ) {
            const sign_in = sign_in_btn.current as HTMLDivElement;
            const sign_up = sign_up_btn.current as HTMLDivElement;
            const container = containerRef.current as HTMLDivElement;

            sign_up.addEventListener("click", () => {
                container.classList.add("sign-up-mode");
            });

            sign_in.addEventListener("click", () => {
                container.classList.remove("sign-up-mode");
            });
        }
    }, []);

    function ShowHide() {
    }

    return (
        <div className="f-container" ref={containerRef}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" method="post" className="sign-in-form">
                        <h2 className="title">Login</h2>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib1">
                                    <BsFillPersonFill className="icon" />
                                    <input type="text" required />
                                    <label>Nome Completo</label>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib2">
                                    <IoLockClosed className="icon" />
                                    <input type="password" required />
                                    <label>Senha</label>
                                </div>
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Entrar"
                            className="buttn solid"
                        />

                        <p className="social-text">
                            Entrar com as redes sociais:
                        </p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <AiOutlineInstagram className="fas fa-instagram" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiOutlineTwitter className="fas fa-twitter" />
                            </a>
                            <a href="#" className="social-icon">
                                <FaFacebook className="fas fa-facebook-fa" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiOutlineGoogle className="fas fa-google" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiFillLinkedin className="fas fa-linkedin-in" />
                            </a>
                        </div>
                    </form>

                    <form action="" method="post" className="sign-up-form">
                        <h2 className="title">Registrar</h2>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib3">
                                    <BsFillPersonFill className="icon" />
                                    <input type="text" required />
                                    <label>Nome Completo</label>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib4">
                                    <IoMail className="icon" />
                                    <input type="email" required />
                                    <label>Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib5">
                                    <IoMdFingerPrint className="icon" />
                                    <input type="text" required />
                                    <label>CPF</label>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib6">
                                    <AiFillEye
                                        className="icon"
                                        id="eyes"
                                        onClick={ShowHide}
                                    />
                                    <input
                                        type="password"
                                        required
                                        id="password"
                                    />
                                    <label>Senha</label>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="nome-completo">
                                <div className="input-box" id="ib7">
                                    <IoLockClosed className="icon" />
                                    <input type="password" required />
                                    <label>Confirmar Senha</label>
                                </div>
                            </div>
                        </div>
                        <label htmlFor="botao-register">
                            <input
                                type="submit"
                                value="Entrar"
                                className="buttn solid"
                                id="botao-register"
                            />
                        </label>

                        <p className="social-text">
                            Entrar com as redes sociais:
                        </p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <AiOutlineInstagram className="fas fa-instagram" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiOutlineTwitter className="fas fa-twitter" />
                            </a>
                            <a href="#" className="social-icon">
                                <FaFacebook className="fas fa-facebook-fa" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiOutlineGoogle className="fas fa-google" />
                            </a>
                            <a href="#" className="social-icon">
                                <AiFillLinkedin className="fas fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Novo por aqui ?</h3>
                        <p>
                            A VirtualSkins é uma e-commerce especializada em
                            vendas de Óculos Virtuais onde o cliente pode
                            personalizar o seu VR da forma de desejar. Esta é
                            uma empresa onde você consegue expressar sua
                            criatividade com as skins dos seus VRs e mostrar
                            para seus amigos o seu lindo óculos.{" "}
                        </p>
                        <button
                            className="buttn transparent"
                            id="sign-up-btn"
                            ref={sign_up_btn}
                        >
                            Registre-se
                        </button>
                    </div>
                    <img src={LostOnline} className="image" alt="" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>Já tem conta conosco ?</h3>
                        <p>
                            É muito bom te ver aqui de novo, faça seu login e
                            veja as novidades que estão te esperando, corre
                            antes que acabem as promoções.
                        </p>
                        <button
                            className="buttn transparent"
                            id="sign-in-btn"
                            ref={sign_in_btn}
                        >
                            Login
                        </button>
                    </div>
                    <img
                        src={Programming}
                        className="image less-height"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
