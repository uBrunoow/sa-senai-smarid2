import "../sass/desejos.sass";
import F1 from "./components/Favorito/favorito";
import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Footer from "./components/Footer/footer";

import { FaHeart } from "react-icons/fa";

export default function Desejos() {
    return (
        <div className="Body_page">
            <Navbar_logado />
            <main className="favoritos">
                <div className="favoritos-content">
                    <div className="titulo-favoritos">
                        <FaHeart id="Coracao" />
                        <h1>Meus favoritos</h1>
                    </div>
                    <F1 />
                    <F1 />
                    <F1 />
                    <F1 />
                    <F1 />
                    <F1 />
                </div>
            </main>
            <Footer />
        </div>
    );
}
