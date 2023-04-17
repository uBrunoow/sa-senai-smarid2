import F1 from "./components/Favorito/favorito";
import Navbar_logado from "./components/Navbar-logado/Navbar_logado";
import Footer from "./components/Footer/footer";

export default function Desejos() {
    return (
        <div>
            <Navbar_logado />
            <main className="favoritos">
                <div className="favoritos-content">
                    <div className="titulo-favoritos">
                        {/* coracao */}
                        <h1>Meus favoritos</h1>
                    </div>
                    <div className="description-favoritos">
                        <p className="favoritos-text">
                            Seus produtos favoritos ficam aqui para você ver
                            sempre que quiser
                        </p>
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
