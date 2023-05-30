import '../Main-1/main-1.sass'
import { InitialContent, ParagraphContent, TitleContent } from './styles'


export default function Main () {

    return (
    <main className="initial-1">
        <InitialContent className="initial-1-content">
            <p className="p-roxo">WELCOME TO</p>
            <TitleContent>The new <span>reality</span> is the <br/>
                    world of metaverse<span className="last-letter">.</span></TitleContent>
            <ParagraphContent className="p-branco">Virtual reality is a computer-generated environment with <br/> scenes and objects that appear to be real.</ParagraphContent>
            <div className="buttons-initial-1">
                <button className="btn-initial-1">
                    <a href={`/login`}>
                        Get started
                    </a>
                </button>
                <button className={"btn-initial-1"}>
                    <a href="">
                        Explore
                    </a>
                </button>
            </div>
        </InitialContent>
    </main>
    )
}