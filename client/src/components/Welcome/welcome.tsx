import '../Welcome/welcome.sass'
import '../Welcome/style.css'

export default function Welcome() {
    return (
        <main className="welcome">
            <div className="welcome-wrapper">
                <div className="welcome-content">
                    <div className="title-welcome">
                        <p className="p-roxo tcenter">WELCOME TO THE NEW REALITY</p>
                        <h1 className="title-initial-2 tcenter title" >Join the virtual reality revolution and upgrade your entertainment<span className="last-letter">.</span></h1>
                        <p className="p-branco tcenter desc-welcome">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/> accusantium
                        </p>
                    </div>
                    <div className="btnWelcome">
                        <button>
                            <a href="">
                                Get started
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}