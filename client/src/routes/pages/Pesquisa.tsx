import P1 from './components/Produtos2/produtos2'
import '../sass/pesquisa.sass'

import Footer from './components/Footer/footer';
import NavbarLogado from './components/Navbar-logado/Navbar_logado';
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillFilterSquareFill } from "react-icons/bs"

export default function Pesquisa() {
    return (
        <div className='Body_page'>
            <NavbarLogado/>
            <main className="pesquisa">
                <div className="pesquisa-wrapper">
                    <div className="pesquisa-content">
                        <div className="titulo-do-filtro">
                            <h1 className="filtro-nome"> Categorias relacionados</h1>
                            <p>tal produto</p>
                        </div>
                        <div className="filtros">
                            <div className="filtro-box">
                                <div className="titulo-filtro">
                                    <BsFillFilterSquareFill className='Filter_icon'/>
                                    <h1>Filtrar por:</h1>
                                </div>
                                <div className="price-extension">
                                    <h1 className="price-titulo"></h1>
                                    <input type="range" className="bar"/>
                                    <div className="zero-max">
                                        <p>R$0,00</p>
                                        <p>R$2.000,00</p>
                                    </div>
                                </div>
                                <div className="tipo-de-produto">
                                    <h1>PROMOÇÕES</h1>
                                    <div className="p-container">
                                        <input type="checkbox" id="cbx2" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx2" className="check">                                            
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>                                           
                                        </label>
                                        <input type="checkbox" id="cbx3" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx3" className="check">                                           
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>                                           
                                        </label>
                                        <input type="checkbox" id="cbx4" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx4" className="check">                                           
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>                                           
                                        </label>
                                    </div>
                                    <h1>PROMOÇÕES</h1>
                                    <div className="p-container">
                                        <input type="checkbox" id="cbx5" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx5" className="check">                                          
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>                                           
                                        </label>
                                        <input type="checkbox" id="cbx6" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx6" className="check">                                          
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>                                           
                                        </label>
                                        <input type="checkbox" id="cbx7" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx7" className="check">                                      
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>
                                        </label>
                                    </div>
                                    <h1>CATEGORIAS</h1>
                                    <div className="p-container">
                                        <input type="checkbox" id="cbx8" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx8" className="check">                                          
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>
                                        </label>
                                        <input type="checkbox" id="cbx9" className='cbnone'
                                        // style="display: none;"
                                        />
                                        <label htmlFor="cbx9" className="check"> 
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>
                                        </label>
                                        <input type="checkbox" id="cbx10" className='cbnone'
                                            // style="display: none;"
                                        />
                                        <label htmlFor="cbx10" className="check"> 
                                            <div className="flex-box-container">
                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                                                    <polyline points="1 9 7 14 15 4"></polyline>
                                                </svg>
                                                <p>Oferta</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="titulo-pesquisa">
                            <h1>Pesquisa relacionada a: tal produto</h1>
                            <div className="ordenar-por">
                                <img src="/IMG/ordenar.svg" alt=""/>
                                <p>Ordenar por:</p>
                                <button className="order-for">
                                    Mais recente
                                    <input type="checkbox" name="" id="checkbox" 
                                    // onclick="clickInfo2()"
                                    /> 
                                <label htmlFor="checkbox" className="checkbox-abrir">
                                    <IoMdArrowDropdown id="flecha2"/>
                                </label>
                                </button>
                                <div id="optOrderFor">
                                    <div className="opts">
                                        <p>Relevância</p>
                                        <p>Mais vendidos</p>
                                        <p>Descontos</p>
                                        <p>Maior preço</p>
                                        <p>Menos preço</p>
                                        <p>De A a Z</p>
                                        <p>De Z a A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="produtos-pesquisa">
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                            <P1/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
        
    )
}