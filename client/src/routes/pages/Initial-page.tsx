// Importar componentes
import Promoções from "./components/Promoções/promos";
import Countdown from "./components/Countdown/countdown";
import Produtos from "./components/Produtos/produtos";
import Extra_promotion from "./components/Extra-promotion/extra_promotion";
import Departamentos from "./components/Departamentos/departamentos";
import Destaques from "./components/Destaques/destaques-1";
import Extra_promotion2 from "./components/Extra-promotion2/extra-promotion2";
import Footer from "./components/Footer/footer";
import { NavbarLogado } from "./components/Navbar-logado/Navbar_logado";

export default function Initialpage() {

    return (
        <div className="Body_page">
            <NavbarLogado />
            <Promoções />
            <Countdown />
            <Produtos />
            <Extra_promotion />
            <Departamentos />
            <Destaques />
            <Extra_promotion2 />
            {/* <Popup/> */}
            <Footer />
        </div>
    );
}
