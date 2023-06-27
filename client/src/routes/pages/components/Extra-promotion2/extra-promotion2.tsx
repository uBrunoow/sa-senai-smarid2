// Importar estilo do sass
import './extra-promotion2.sass'

// Importar styles components
import { PromotionN2, PromotionN3 } from './styles'

export default function Extra_promotion2() {
    return (
        <main>
            <PromotionN2 className="prm1">
                <div className="promotion-4"></div>
            </PromotionN2>
            <PromotionN3 className="prm2"></PromotionN3>
        </main>
    )
}