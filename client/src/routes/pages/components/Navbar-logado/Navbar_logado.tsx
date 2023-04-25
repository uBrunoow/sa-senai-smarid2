import './Navbar_logado.sass'

import { IoCart } from 'react-icons/io5'
import Sun from '/src/assets/IMG/sun.svg'
import Conta from  '/src/assets/IMG/Rectangle 335.svg'


export default function Navbar_logado() {
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
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Games</a>
                <a href="">About</a>
            </div>
            <div className="account-search-cart">
                <div className="input-wrapper">
                <button className="icon"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                    </svg>
                </button>
                <input placeholder="search.." className="input2" name="text" type="text"/>
            </div>

            <div className="cart-button">
                <a href="">
                <IoCart className="input3"/>
                </a>
            </div>
            <div className="account-button">
                <div className="account-img">
                <a href="/Minha-conta.tsx">
                    <img src={Conta}/> 
                </a>
                </div>
            </div>
               
            </div>
           
            <div className="light-dark">
              <img src={Sun}/>
            </div>
        </header>
    </nav>
    )
}