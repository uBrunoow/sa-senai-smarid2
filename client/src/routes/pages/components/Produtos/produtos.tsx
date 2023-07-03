// Importar estilos do css e sass
import './Swiper-2/styles.css'
import './produtos.sass'

// Importar swiper
import P1 from "../Produtos2/produtos2";


export default function Produtos() {
    return (
        <div className='produtos-em-ofertas' >
            <div className="ofertas-container">
                <div className="ofertas-content">
                    <div className="card-ofertas-wrapper">
                        <div className="card-ofertas">
                            <div className="card-content-ofertas">
                                <P1/>
                                <P1/>
                                <P1/>
                                <P1/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}