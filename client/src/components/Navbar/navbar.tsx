import '../Navbar/navbar.sass'
import '../Navbar/style.css'

import Sun from '../Navbar/img/sun.svg'

export default function Navbar () {
    return (
        <nav>
            <header>
                <div className="container">
                    <input type="checkbox" id="checkbox-menu"/>
                    <label htmlFor="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label> 
                </div>
                <div className="logo">Logo</div>
                <div className="navbar">
                    <a href={`/`}>Home</a>
                    <a href={`/initialpage`}>Products</a>
                    <a href="">Games</a>
                    <a href="">About</a>
                </div>
                <div className="sign-in-up">
                    <div className="sign-in">
                        <button type="submit">
                            <a href={`/login`}>Sign-in</a>
                        </button>
                    </div>
                    <div className="sign-up">
                        <button type="submit">
                            <a href={`/login`}>Sign-up</a>
                        </button>
                    </div>
                </div>
            
                <div className="light-dark">
                <img src={Sun}/>
                </div>
            </header>
        </nav>
    )
}