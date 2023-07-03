// Importar estilo do sass
import "./navbar-pag.sass";

// Importar imagens
import Sun from "/src/assets/IMG/sun.svg";
import Conta from "/src/assets/IMG/Rectangle 335.svg";

export default function Navbar_pag() {
  return (
    <nav>
      <header>
        <div className="logo">
          <a href="/initialpage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/VR_Logo_Virtual_Reality_Logo.svg/512px-VR_Logo_Virtual_Reality_Logo.svg.png"
              alt=""
            />
          </a>
        </div>
        <div className="account-button">
          <div className="account-img">
            <a href={`/conta`}>
              <img src={Conta} />
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
}
