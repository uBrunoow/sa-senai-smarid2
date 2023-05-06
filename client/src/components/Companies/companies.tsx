import "../Companies/companies.sass";
import "../Companies/style.css";

import { FaPlaystation } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { SiAmd } from "react-icons/si";
import { SiNvidia } from "react-icons/si";

export default function Companies() {
    return (
        <div>
            <main className="black-main"></main>
            <main className="companies">
                <div className="compaines-content">
                    <div className="title-content">
                        <h1 className="Title_company">
                            Over 2,000 Company worldwide rely <br /> on
                            VirtualSkins<span className="last-letter">!</span>
                        </h1>
                        <div className="p-line"></div>
                        <div className="company">
                            <div className="company-button">
                                <div className="company-name">
                                    <FaPlaystation className="Companies" />
                                    <div className="Company_infos">
                                        <h1 >
                                            <a href="https://store.playstation.com"  className="Name_infos" target='__blank'>Playstation</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="company-button">
                                <div className="company-name">
                                    <AiOutlineGoogle className="Companies" />
                                    <div className="Company_infos">
                                        <h1>
                                            <a href="https://google.com/"  className="Name_infos" target='__blank'>Google</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="company-button">
                                <div className="company-name">
                                    <SiNike className="Companies" />
                                    <div className="Company_infos">
                                        <h1>
                                            <a href="https://www.nike.com.br/"  className="Name_infos" target='__blank'>Nike</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="company">
                            <div className="company-button">
                                <div className="company-name">
                                    <SiIntel className="Companies" />
                                    <div className="Company_infos">
                                        <h1>
                                            <a href="https://www.intel.com.br/"  className="Name_infos" target='__blank'>Intel</a>    
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="company-button">
                                <div className="company-name">
                                    <SiAmd className="Companies" />
                                    <div className="Company_infos">
                                        <h1>
                                            <a href="https://www.amd.com/"  className="Name_infos" target='__blank'>AMD</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="company-button">
                                <div className="company-name">
                                    <SiNvidia className="Companies" />
                                    <div className="Company_infos">
                                        <h1>
                                            <a href="https://www.nvidia.com/"  className="Name_infos" target='__blank'>NVIDIA</a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
