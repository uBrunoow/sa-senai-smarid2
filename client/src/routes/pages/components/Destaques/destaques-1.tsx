// Importar estilo do sass
import './destaques.sass'

// Importar
import D1 from "./Destaques-1/destaques-1"
import { Destaque, TittleDestaque } from "./styles"

export default function Destaques() {
    return (
        <Destaque className="destaques">
            <div className="destaques-content">
                <p className="destaques-p">HIGHLIGHTS PRODUTCS</p>
                <TittleDestaque className="destaques-h1">Super promotion just for you personalize your VR .</TittleDestaque>
                <div className="purple-line"></div>
                <div className="destaques">
                    <D1/>
                    <D1/>
                    <D1/>
                    <D1/>
                    <D1/>
                    <D1/>
                </div>
            </div>
        </Destaque>
    )
    
}