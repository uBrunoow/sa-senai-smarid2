import D1 from "./Destaques-1/destaques-1"
import './destaques.sass'

export default function Destaques() {
    return (
        <main className="destaques">
            <div className="destaques-content">
                <p className="destaques-p">HIGHLIGHTS PRODUTCS</p>
                <h1 className="destaques-h1">Super promotion just for you personalize your VR .</h1>
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
        </main>
    )
    
}