import './highlights.sass'
import { Highligths, HighligthsContent, ParagraphHighlights } from './styles'
import Fundo from '/src/assets/IMG/virtual_reality.svg'

export default function Highlights() {
    return (
        <Highligths className="highligths">
            <div className="highligths-wrapper">
                <HighligthsContent className="highligths-content">
                    <div className="highlight-image">
                        <img src={Fundo} alt=""/>
                    </div>
                    <div className="infos-highlights">
                        <h1 className="title-initial-2">Highlights products </h1>
                        <ParagraphHighlights className="p-branco">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</ParagraphHighlights>
                        <div className="btnHighligths">
                            <button>
                                <a href={`/initialpage`}>
                                    GO FOR SHOP
                                </a>
                            </button>
                        </div>
                    </div>
                </HighligthsContent>
            </div>
        </Highligths>
    )
}