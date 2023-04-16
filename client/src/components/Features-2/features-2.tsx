import './features-2.sass'
import Background from './img/image20.jpg'

export default function Features2 () {
    return (
        <main className="features-2">
        <div className="features-content">
            <div className="features-title">
                <p className="p-roxo">Best features of VirtualSkins!</p>
                <h1 className="title-initial-2">Empowering VR to enhance <br/> people's lives<span className="last-letter">.</span></h1>
                <p className="p-branco text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>

            <div className="img-features-3">
                <img src={Background} alt=""/>
            </div>

            <div className="text-features">
                <div className="text-1">
                    <h1 className="text-features-title tright">VR for console</h1>
                    <p className="p-branco right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>

                <div className="text-2">
                    <h1 className="text-features-title tright">VR for desktop</h1>
                    <p className="p-branco right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>

                <div className="text-3">
                    <h1 className="text-features-title tleft">Ultra 3d</h1>
                    <p className="p-branco left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>

                <div className="text-4">
                    <h1 className="text-features-title tleft">Guarantee up to 3 Years</h1>
                    <p className="p-branco left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                </div>
            </div>
        </div>
    </main>
    )
}