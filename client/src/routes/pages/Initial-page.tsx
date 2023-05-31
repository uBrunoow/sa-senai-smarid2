import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Promoções from "./components/Promoções/promos";
import Countdown from "./components/Countdown/countdown";
import Produtos from "./components/Produtos/produtos";
import Extra_promotion from "./components/Extra-promotion/extra_promotion";
import Departamentos from "./components/Departamentos/departamentos";
import Destaques from "./components/Destaques/destaques-1";
import Extra_promotion2 from "./components/Extra-promotion2/extra-promotion2";
import Rodape from "./components/Footer/footer";
import Popup from "./components/Popup/popup";
import NavbarLogado from "./components/Navbar-logado/Navbar_logado";
import { ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";

export default function Initialpage() {
    const [theme, setTheme] = usePersistedState("theme", light);

    const toggleTheme = () => {
      setTheme(theme.title === "light" ? dark : light);
    };
    return (
        <ThemeProvider theme={theme}>
        <div className="Body_page">
            <NavbarLogado toggleTheme={toggleTheme}/>
            <Promoções />
            <Countdown />
            <Produtos />
            <Extra_promotion />
            <Departamentos />
            <Destaques />
            <Extra_promotion2 />
            <Popup/>
            <Rodape />
        </div>
        </ThemeProvider>
    );
}
