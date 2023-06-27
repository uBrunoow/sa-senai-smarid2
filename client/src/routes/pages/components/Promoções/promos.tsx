// Importar estilos do sass e css
import "./promos.sass";
import './Swiper-1/styles.css'

// Importar swiper
import Swiper1 from './Swiper-1/swiper-1'

export default function Promoções() {
    return (
        <main className="anuncios">
            <div className="slide-container swiper">
                <div className="slide-content">
                    <div className="card-wrapper swiper-wrapper">
                        <Swiper1/>
                    </div>
                </div>
            </div>
        </main>
    )
}