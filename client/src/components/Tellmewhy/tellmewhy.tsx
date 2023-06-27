import './tellmewhy.sass'
import Background from './img/peakpx - Copia.jpg'
import { TellMeWhy } from './styles'


export default function Tellmewhy() {
    return(
        <TellMeWhy className="tellmewhy">
            <div className="tellmewhy-content">
                <div className="tellmewhy-desc">
                    <p className="p-roxo">WHY CHOOSE US?</p>
                    <h1 className="title-initial-2">Enjoy the limitless <br/>  entertainment possibilities with <br/> VR<span className="last-letter">.</span></h1>
                    <p className="desc-initial-2">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    </p>
                    <div className="infos-tellmewhy">
                        <div className="circles">
                            <div className="circle-features c1"></div>
                        </div>
                        <div className="circles">
                            <div className="circle-features c1"></div>
                        </div>
                        <div className="circles">
                            <div className="circle-features c1"></div>
                        </div>
                        <div className="information">
                            <h1>2K+</h1>
                        </div>
                        <div className="information">
                            <h1>2K+</h1>
                        </div>
                        <div className="information">
                            <h1>2K+</h1>
                        </div>
                        <div className="descriptions">
                            <p>Sed ut perspiciatis</p>
                        </div>
                        <div className="descriptions">
                            <p>Sed ut perspiciatis</p>
                        </div>
                        <div className="descriptions">
                            <p>Sed ut perspiciatis</p>
                        </div>
                    </div>
                </div>
                <div className="img-tellmewhy">
                        <img src={Background} alt=""/>
                </div>
            </div>
        </TellMeWhy>
    )
}