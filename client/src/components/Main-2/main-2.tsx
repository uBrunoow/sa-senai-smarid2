import '../Main-2/main-2.sass'

import Background from '../Main-2/img/image 19.png'

export default function Main2 () {
    return (
    <main className="initial-2">
        <div className="initial-2-content">
            <div className="img-initial-2"> <img src={Background} alt=""/></div>
            <div className="img-overlay-2"></div>
            <div>
                <p className="p-roxo">WHO WE ARE</p>
                <h1 className="title-initial-2">Virtual Reality: Where reality <br/> ends and imagination <br/> begins<span className="last-letter">.</span> </h1>
                <p className="desc-initial-2">
                    Pretium pharetra est elit sollicitudin mollis habitasse. Lobortis leo justo porta erat laoreet torquent tortor arcu nascetur aliquam inceptos. Montes lacinia egestas elit eleifend vestibulum nisl faucibus eros phasellus.
                </p>
                <button className="btn-initial-1 btn-initial-2">
                    <a href="">
                        Read more
                    </a>
                </button>
            </div>
        </div>
    </main>
    )
}