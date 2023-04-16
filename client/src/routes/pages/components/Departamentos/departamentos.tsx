import './departamentos.sass'

import Glasses from '/src/assets/IMG/vr-glasses.svg'
import Games_Apps from '/src/assets/IMG/games e apps.svg'
import Acessories from '/src/assets/IMG/accesories.svg'

export default function Departamentos() {
    return (
        <main className="departamentos">
            <div className="departamentos-content">
                <div className="departamento-1">
                    <div className="image-dep-content">
                        <img src={Glasses} alt=""/>
                    </div>
                    <h1 className="departamentos-h1">VR GLASSES</h1>
                </div>
                <div className="departamento-2">
                    <img src={Games_Apps} alt=""/>
                    <h1 className="departamentos-h1">GAMES & APPS</h1>
                </div>
                <div className="departamento-3">
                    <img src={Acessories} alt=""/>
                    <h1 className="departamentos-h1">ACCESSORIES</h1>
                </div>
            </div>
        </main>
    )
}