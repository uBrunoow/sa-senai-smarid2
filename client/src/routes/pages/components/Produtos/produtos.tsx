import Swiper2 from './Swiper-2/swiper-2'
import './Swiper-2/styles.css'
import './produtos.sass'

export default function Produtos() {
    return (
        <main className="produtos">
            <div className="ofertas-container swiper">
                <div className="ofertas-content">
                    <div className="card-ofertas-wrapper swiper-wrapper">
                        <div className="card-ofertas swiper-slide">
                            <div className="card-content-ofertas">
                                <Swiper2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}