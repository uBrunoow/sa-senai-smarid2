// Importar estilo do sass
import './extra_promotion.sass'

// Importar styled components
import { Promotion } from './styles'

export default function Extra_promotion() {
    return(
        <Promotion className='promotion'>
            <div className="promotion-1"></div>
            <div className="promotion-2"></div>
        </Promotion>
    )
}