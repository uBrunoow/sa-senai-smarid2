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
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


export default function Login() {
  // Validations
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [isEmailValid, setEmailIsValid] = useState(false);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    setEmailIsValid(validateEmail(value));
  };

  const validateEmail = (email: string): boolean => {
    // Regex para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isPasswordValid, setPasswordIsValid] = useState(false);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordIsValid(value === confirmpassword);
  };

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setPasswordIsValid(value === password);
  };

  const [isCpfValid, setCpfIsValid] = useState(false);
  const handleChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const digitsOnly = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const formattedCpf = formatCpf(digitsOnly); // Formata o CPF com os pontos

    setCpf(formattedCpf);
    setCpfIsValid(validateCpf(digitsOnly));
  };

  const validateCpf = (cpf: string): boolean => {
    // Verifique se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }

    // Verifique se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Cálculo dos dígitos verificadores
    let sum = 0;
    let remainder: number;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf[i - 1]) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf[9])) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf[i - 1]) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf[10])) {
      return false;
    }

    return true;
  };

  const formatCpf = (digits: string): string => {
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    } else if (digits.length <= 9) {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    } else {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
        6,
        9
      )}-${digits.slice(9)}`;
    }
  };
  const [isLoginEmailValid, setLoginEmailIsValid] = useState(false);
  const handleChangeLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLoginEmail(value);
    setLoginEmailIsValid(validateLoginEmail(value));
  };

  const validateLoginEmail = (email: string): boolean => {
    // Regex para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(loginEmail);
  };

  const handleChangeLoginPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginPassword(e.target.value);
  };

  // User data registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");

  async function doRegistration(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      email == "" ||
      name == "" ||
      password == "" ||
      confirmpassword == "" ||
      cpf == ""
    ) {
      console.log("🔴 Preencha todos os campos");
      setLoginStatus(`🔴 Preencha todos os campos`);
      return;
    }
    if (isEmailValid !== true) {
      console.log("🔴 Email inválido");
      setLoginStatus(`🔴 Email inválido`);
      return;
    } else if (isCpfValid !== true) {
      console.log("🔴 O CPF inserido não é válido");
      setLoginStatus(`🔴 O CPF inserido não é válido`);
      return;
    } else if (isPasswordValid !== true) {
      console.log("🔴 As senhas não conferem");
      setLoginStatus(`🔴 As senhas não conferem`);
      return;
    }

    const obj = {
      name,
      email,
      password,
      confirmpassword,
      cpf,
    };
    const response = await fetch("http://localhost:3002/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: obj.name,
        email: obj.email,
        password: obj.password,
        confirmpassword: obj.password,
        cpf: obj.cpf,
      }),
    })
      .then(function (response) {
        console.log(response);
        if (response.status == 201) {
          console.log("🟢 Usuário cadastrado com sucesso");
          navigateTo("/initialpage");

          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCpf("");
        } else {
          console.log("🔴 As credenciais não estão corretas");
          if (
            response.status !== 201 ||
            email == "" ||
            name == "" ||
            password == "" ||
            confirmpassword == "" ||
            cpf == ""
          ) {
            console.log("🔴 Preencha todos os campos");
            setLoginStatus(`🔴 Preencha todos os campos`);
            return;
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const navigateTo = useNavigate();
  const [statusLogin, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");
  const [token, setToken] = useState('');

  // User data login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Validação do email e senha
  const validateForm = () => {
    if ( isLoginEmailValid !== true || password) {
      setValidationError(true);
      console.log("🔴 Dados de login inválidos");
      setLoginStatus(`🔴 Dados de login inválidos`);
      return false;
    }
    return true;
  };

  // Autenticação
  const Authenticate = async () => {
    setIsLoading(true);
    const obj = {
      loginEmail,
      loginPassword,
    };

    const response = await fetch("http://localhost:3002/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: obj.loginEmail,
        password: obj.loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        Cookies.set('jwtToken', data.token, { expires: 30 });
        if (
          loginEmail == "" ||
          loginPassword == ""
        ) {
          setLoginStatus(`🔴 Credenciais não estão corretas`);
          console.log("🔴 As credenciais não estão corretas");
        } else {
          navigateTo("/initialpage");
          setLoginEmail("");
          setLoginPassword("");
        }
      })
      .catch(function (error) {
        console.error(error);
      });

    setIsLoading(false);
  };

  function doLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      Authenticate();
      console.log("🟢 Usuário autenticado com sucesso");
    } else {
      console.log("🔴 As credenciais não estão corretas");
    }
  }

  useEffect(() => {
    if (statusLogin !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 4000);
    }
  }, [statusLogin]);

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
              <span className={statusHolder}>{statusLogin}</span>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib1">
                    <BsFillPersonFill className="icon" />
                    <input
                      type="email"
                      id="textLogin"
                      autoComplete="off"
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
                      id="password"
                      autoComplete="off"
                      onChange={handleChangeLoginPassword}
                      value={loginPassword}
                    />
                    <label>Senha</label>
                  </div>
                </div>
              </div>
              {/* {validationError && <p>Dados de login inválidos.</p>}
              {isLoading ? (
                <p>Realizando autenticação...</p>
              ) : ( */}
                <button type="submit" className="buttn solid">
                  Entrar
                </button>
              {/* )} */}

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
              <span className={statusHolder}>{statusLogin}</span>
              <div className="lines">
                <div className="nome-completo">
                  <div className="input-box" id="ib3">
                    <BsFillPersonFill className="icon" />
                    <input
                      type="text"
                      // required
                      id="text"
                      autoComplete="off"
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
                      type="text"
                      // required
                      id="email"
                      autoComplete="off"
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
                      // required
                      id="cpf"
                      autoComplete="off"
                      maxLength={14}
                      onChange={handleChangeCpf}
                      value={cpf}
                    />
                    {/* <span className="">{isCpfValid ? <p>O CPF é válido.</p> : <p>O CPF é inválido.</p>}</span>  */}
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
                      // required
                      id="password2"
                      autoComplete="off"
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
                      // required
                      autoComplete="off"
                      onChange={handleChangeConfirmPassword}
                      value={confirmpassword}
                    />
                    {/* {isPasswordValid ? <p>As senhas coincidem.</p> : <p>As senhas não coincidem.</p>} */}
                    <label>Confirmar Senha</label>
                  </div>
                </div>
              </div>
              <button className="buttn solid" id="botao-register">
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
