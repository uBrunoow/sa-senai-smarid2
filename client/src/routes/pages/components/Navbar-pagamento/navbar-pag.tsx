// Importar estilo do sass
import "./navbar-pag.sass";

// Importar imagens
import Sun from "/src/assets/IMG/sun.svg";
import Conta from "/src/assets/IMG/Rectangle 335.svg";

export default function Navbar_pag() {
    return (
        <nav>
            <header>
                <div className="logo">Logo</div>
                <div className="account-button">
                    <div className="account-img">
                        <a href={`/conta`}>
                            <img src={Conta} />
                        </a>
                    </div>
                </div>
                <div className="light-dark">
                    <img src={Sun} />
                </div>
            </header>
        </nav>
    );
}
