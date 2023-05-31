import { ParagraphContent } from '../Main-1/styles'
import './features-2.sass'
import Background from './img/image20.jpg'
import { FeaturesN2, TitleFeatures } from './styles'

export default function Features2 () {
    return (
        <FeaturesN2 className="features-2">
        <div className="features-content">
            <div className="features-title">
                <p className="p-roxo">Best features of VirtualSkins!</p>
                <h1 className="title-initial-2">Empowering VR to enhance <br/> people's lives<span className="last-letter">.</span></h1>
                <ParagraphContent className="p-branco text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphContent>
            </div>

            <div className="img-features-3">
                <img src={Background} alt=""/>
            </div>

            <div className="text-features">
                <div className="text-1">
                    <TitleFeatures className="text-features-title tright">VR for console</TitleFeatures>
                    <ParagraphContent className="p-branco right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphContent>
                </div>

                <div className="text-2">
                    <TitleFeatures className="text-features-title tright">VR for desktop</TitleFeatures>
                    <ParagraphContent className="p-branco right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphContent>
                </div>

                <div className="text-3">
                    <TitleFeatures className="text-features-title tleft">Ultra 3d</TitleFeatures>
                    <ParagraphContent className="p-branco left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphContent>
                </div>

                <div className="text-4">
                    <TitleFeatures className="text-features-title tleft">Guarantee up to 3 Years</TitleFeatures>
                    <ParagraphContent className="p-branco left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphContent>
                </div>
            </div>
        </div>
    </FeaturesN2>
    )
}