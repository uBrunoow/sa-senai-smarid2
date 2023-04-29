import '../Companies/companies.sass'
import '../Companies/style.css'

import { FaPlaystation } from "react-icons/fa"
import { AiOutlineGoogle } from "react-icons/ai"
import { SiNike } from "react-icons/si"
import { SiIntel } from "react-icons/si"
import { SiAmd } from "react-icons/si"
import { SiNvidia } from "react-icons/si"

export default function Companies () {

    return (
    <div>
        <main className="black-main"></main>
        <main className="companies">
        <div className="compaines-content">
            <div className="title-content">
                <h1>Over 2,000 Company worldwide rely <br/> on VirtualSkins<span className="last-letter">!</span></h1>
                <div className="p-line"></div>
                <div className="company">
                    <div className="company-name">
                        <FaPlaystation className='Companies'/>
                    </div>
                    <div className="company-name">
                        <AiOutlineGoogle className='Companies'/>
                    </div>
                    <div className="company-name">
                        <SiNike className='Companies'/>
                    </div>
                </div>
                <div className="company">
                    <div className="company-name">
                        <SiIntel className='Companies'/>
                    </div>
                    <div className="company-name">
                        <SiAmd className='Companies'/>
                    </div>
                    <div className="company-name">
                        <SiNvidia className='Companies'/>
                    </div>
                </div>
            </div>  
        </div>
    </main>
    </div>
    
    )
}


