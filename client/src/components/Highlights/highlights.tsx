import './highlights.sass'
import Fundo from '/src/assets/IMG/virtual_reality.svg'

export default function Highlights() {
    return (
        <main className="highligths">
            <div className="highligths-wrapper">
                <div className="highligths-content">
                    <div className="highlight-image">
                        <img src={Fundo} alt=""/>
                    </div>
                    <div className="infos-highlights">
                        <h1 className="title-initial-2">Highlights products </h1>
                        <p className="p-branco">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        <div className="btnHighligths">
                            <button>
                                <a href="">
                                    GO FOR SHOP
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}