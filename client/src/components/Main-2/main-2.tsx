import '../Main-2/main-2.sass'

import Background from '../Main-2/img/image 19.png'
import { DescriptionContent2, InitialContent2, TitleContent2 } from './styles'

export default function Main2 () {
    return (
    <main className="initial-2">
        <InitialContent2 className="initial-2-content">
            <div className="img-initial-2"> <img src={Background} alt=""/></div>
            <div className="img-overlay-2"></div>
            <div>
                <p className="p-roxo">WHO WE ARE</p>
                <TitleContent2 className="title-initial-2">Virtual Reality: Where reality <br/> ends and imagination <br/> begins<span className="last-letter">.</span> </TitleContent2>
                <DescriptionContent2 className="desc-initial-2">
                    Pretium pharetra est elit sollicitudin mollis habitasse. Lobortis leo justo porta erat laoreet torquent tortor arcu nascetur aliquam inceptos. Montes lacinia egestas elit eleifend vestibulum nisl faucibus eros phasellus.
                </DescriptionContent2>
                {/* <button className="btn-initial-1 btn-initial-2">
                    <a href="">
                        Read more
                    </a>
                </button> */}
            </div>
        </InitialContent2>
    </main>
    )
}