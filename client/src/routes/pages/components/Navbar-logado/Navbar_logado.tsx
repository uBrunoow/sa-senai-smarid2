import "./Navbar_logado.sass";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import Sun from "/src/assets/IMG/sun.svg";
import Conta from "/src/assets/IMG/Rectangle 335.svg";
import { BsSearch } from "react-icons/bs";

export default function Navbar_logado() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <nav>
            <header>
                <div className="container">
                    <input type="checkbox" id="checkbox-menu" />
                    <label htmlFor="checkbox-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="logo">Logo</div>
                <div className="navbar">
                    {/* <a href={`/initialpage`}>Home</a>
                    <a href={`/pesquisa`}>Products</a>
                    <a href="">Games</a>
                    <a href="">About</a> */}
                </div>
                <div className="account-search-cart">
                    <div className="input-wrapper">
                        <button className="icon">
                            <BsSearch className="Icon_search" />
                        </button>
                        {/* <input 
                    placeholder="search.." 
                    className="input2" 
                    name="text" 
                    type="text"
                    onChange={( {target}) => setSearchValue(target.value)}
                    value={searchValue}
                    /> */}
                    </div>

                    <div className="cart-button">
                        <a href={`/carrinho`}>
                            <IoCart className="Cart-Icons" />
                        </a>
                        <span className="cart-status">1</span>
                    </div>
                    <div className="account-button">
                        <div className="account-img">
                            <a className="Cart_link" href={`/conta`} >
                                <img src={Conta} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="light-dark">
                    <img src={Sun} />
                </div>
            </header>
        </nav>
    );
}
