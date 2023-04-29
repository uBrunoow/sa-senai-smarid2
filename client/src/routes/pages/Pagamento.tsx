import "../sass/pagamento.sass";

import Navbar_pag from "./components/Navbar-pagamento/navbar-pag";
import Rodape from "./components/Footer/footer";

export default function Pagamento() {
    return (
        <div className="Body_page">
            <main>
                <Navbar_pag />
                <div className="flex">
                    <div className="teste">
                        <button>OK</button>
                        <div id="res">BRUH</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
