// Importar estilo do sass
import './footer.sass'

// Importar icones
import { IoArrowUpOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Copyright2, FooterContainer2 } from './styles';

export default function Footer() {

    function FuncaoVoltar() {
        document.documentElement.scrollTop = 0
    }

    return (
        <footer className='footer'> 
            <FooterContainer2 className="container-footer">
                <hr/>
                <div className="logo">
                </div>
                <div className="logos-footer">

                    <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram/>
                    </a>

                    <a href="https://facebook.com/" target="_blank">  
                        <FaFacebook/>
                    </a>

                    <a href="https://twitter.com/" target="_blank"> 
                    <AiOutlineTwitter/> 
                    </a>

                    <a href="https://linkedin.com/" target="_blank"> 
                    <AiFillLinkedin/> 
                    </a>

                    <a href="https://www.youtube.com/" target="_blank">  
                    <AiFillYoutube />
                    </a>

                </div>
                <div className="links-footer">
                    <ul style={{ listStyleType: "none" }}>
                        <li> <a href=""> Departamentos </a> </li>
                        <li> <a href=""> About us </a> </li>
                        <li> <a href=""> Contact us </a> </li>
                        <li> <a href=""> Account </a> </li>
                    </ul>
                </div>
                <div className="copy">
                    <Copyright2>©2023 VirtualSkins, All Rights Reserved By  <span>SESI/SENAI</span></Copyright2>
                </div>
                <div className="back-to-top" onClick={FuncaoVoltar}>
                    <a href=""> 
                    <IoArrowUpOutline/>
                    </a>
                </div>
                <div className="black-line"/>
            </FooterContainer2>
        </footer>
    )
}