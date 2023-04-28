import '../Features/features.sass'
import '../Features/style.css'
import img1 from './img/image 1.jpg'
import img2 from './img/image 2.jpg'
import img3 from './img/image 4.png'
import img from './img/image.jpg'

import { BsFillPlayFill } from "react-icons/bs"

export default function Companies () {

    return (

        <main className="f-main">
            <div className='features'>
                <div className="imagens-features">
                    <div className="overlay-features">
                        <BsFillPlayFill className='Icons_features'/>
                    </div>
                    <div className="img-features">
                        <div className="img-1">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="img-2">
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                    <div className="img-features">
                        <div className="img-3">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="img-4">
                            <img src={img} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="content-features">
                    <p className="p-roxo">Best features of VirtualSkins!</p>
                    <h1 className="title-initial-2">Empowering VR to enhance people's lives<span className="last-letter">.</span></h1>
                    <p className="desc-initial-2">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    </p>
                    <div className="desc-features">
                        <div className="desc-1">
                            <div className="circle-features"></div>
                            <div className="desc-p">
                                <p className="title-desc"> AI VR developments</p>
                                <p className="desc-branco">Ridiculus cras molestie lectus nullam ullamcorper mus</p>
                            </div>
                        </div>
                        <div className="desc-1">
                            <div className="circle-features"></div>
                            <div className="desc-p">
                                <p className="title-desc">Industry VR Developments</p>
                                <p className="desc-branco">Ridiculus cras molestie lectus nullam ullamcorper mus</p>
                            </div>
                        </div>
                        <div className="desc-1">
                            <div className="circle-features"></div>
                            <div className="desc-p">
                                <p className="title-desc">Medical VR Model</p>
                                <p className="desc-branco">Ridiculus cras molestie lectus nullam ullamcorper mus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}