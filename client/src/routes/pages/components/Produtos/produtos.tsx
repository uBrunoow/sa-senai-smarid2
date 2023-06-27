// Importar estilos do css e sass
import './Swiper-2/styles.css'
import './produtos.sass'

// Importar swiper
import Swiper2 from './Swiper-2/swiper-2'

export default function Produtos() {
    return (
        <div className='produtos-em-ofertas' >
            <div className="ofertas-container">
                <div className="ofertas-content">
                    <div className="card-ofertas-wrapper">
                        <div className="card-ofertas">
                            <div className="card-content-ofertas">
                                <Swiper2/>
                                <Swiper2/>
                                <Swiper2/>
                                <Swiper2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}