import Swiper2 from './Swiper-2/swiper-2'
import './Swiper-2/styles.css'
import './produtos.sass'
import { Produto } from './styles'

export default function Produtos() {
    return (
        <Produto >
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
        </Produto>
    )
}