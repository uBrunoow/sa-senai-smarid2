// Importar estilo do sass
import "../sass/login.sass";

// Importar imagens
import LostOnline from "/src/assets/IMG/lost-online.svg";
import Programming from "/src/assets/IMG/programming.svg";

// Importar icones
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
import { AiFillEyeInvisible } from "react-icons/ai";

// Importar usabilidades do react
import { useRef, useEffect, ChangeEvent, useState } from "react";
import axios from "axios";

export default function Login() {
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangeCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangeLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(e.target.value);
    console.log("value is:", e.target.value);
  };
  const handleChangeLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(e.target.value);
    console.log("value is:", e.target.value);
  };

  // User data registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");

  async function doRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const response = await fetch("http://localhost:3002/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: setName,
        email: setEmail,
        password: setPassword,
        confirmpassword: setConfirmPassword,
        cpf: setCpf,
      }),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log("🟢 Usuário cadastrado com sucesso");
  }
  // User data login
  const [ loginEmail, setLoginEmail ] = useState("");
  const [ loginPassword, setLoginPassword ] = useState("");

  const doLogin = () => {
    axios
      .post("http://localhost:3002/auth/login", {
        loginEmail: setLoginEmail,
        loginPassword: setLoginPassword,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log("🟢 Usuário autenticado com sucesso");
  };

  // Animation of login
  const sign_in_btn = useRef(null);
  const sign_up_btn = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (sign_up_btn.current && sign_in_btn.current && containerRef.current) {
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

  // Function to show or hide
  function ShowHide() {
    const password = document.getElementById("password") as HTMLInputElement;

    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

  return (
    <div className="Body_page">
      <div className="f-container" ref={containerRef}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action=""
              method="post"
              className="sign-in-form"
              onSubmit={doLogin}
            >
              <h2 className="title">Login</h2>
              {/* <span className={statusHolder}>{loginStatus}</span> */}
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib1">
                    <BsFillPersonFill className="icon" />
                    <input
                      type="text"
                      required
                      id="textLogin"
                      onChange={handleChangeLoginEmail}
                      value={loginEmail}
                    />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib2">
                    <IoLockClosed className="icon" />
                    <input
                      type="password"
                      required
                      id="password"
                      onChange={handleChangeLoginPassword}
                      value={loginPassword}
                    />
                    <label>Senha</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="buttn solid"
                // onClick={teste}
              >
                Entrar
              </button>

              <p className="social-text">Entrar com as redes sociais:</p>
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

            <form
              action=""
              method="post"
              className="sign-up-form"
              onSubmit={doRegistration}
            >
              <h2 className="title">Registrar</h2>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib3">
                    <BsFillPersonFill className="icon" />
                    <input
                      type="text"
                      required
                      id="text"
                      onChange={handleChangeName}
                      value={name}
                    />
                    <label>Nome Completo</label>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib4">
                    <IoMail className="icon" />
                    <input
                      type="email"
                      required
                      id="email"
                      onChange={handleChangeEmail}
                      value={email}
                    />
                    <label>Email</label>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib5">
                    <IoMdFingerPrint className="icon" />
                    <input
                      type="text"
                      required
                      id="cpf"
                      onChange={handleChangeCpf}
                      value={cpf}
                    />
                    <label>CPF</label>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib6">
                    <AiFillEye className="icon" id="eyes" onClick={ShowHide} />
                    <input
                      type="password"
                      required
                      id="password2"
                      onChange={handleChangePassword}
                      value={password}
                    />
                    <label>Senha</label>
                  </div>
                </div>
              </div>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib7">
                    <IoLockClosed className="icon" />
                    <input
                      type="password"
                      required
                      onChange={handleChangeConfirmPassword}
                      value={confirmpassword}
                    />
                    <label>Confirmar Senha</label>
                  </div>
                </div>
              </div>
              <button
                className="buttn solid"
                id="botao-register"
                // onClick={createUser}
              >
                Entrar
              </button>
              <p className="social-text">Entrar com as redes sociais:</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <AiOutlineInstagram className="fas fa-instagram" />
                </a>
                <a
                  href={`https://github.com/login/oauth/authorize?client_id=`}
                  className="social-icon"
                >
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
                A SmartID é uma e-commerce especializada em vendas de Óculos
                Virtuais onde o cliente pode personalizar o seu VR da forma de
                desejar. Esta é uma empresa onde você consegue expressar sua
                criatividade com as skins dos seus VRs e mostrar para seus
                amigos o seu lindo óculos.{" "}
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
                É muito bom te ver aqui de novo, faça seu login e veja as
                novidades que estão te esperando, corre antes que acabem as
                promoções.
              </p>
              <button
                className="buttn transparent"
                id="sign-in-btn"
                ref={sign_in_btn}
              >
                Login
              </button>
            </div>
            <img src={Programming} className="image less-height" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
