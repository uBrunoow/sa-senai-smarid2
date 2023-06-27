import "../sass/pagamento.sass";

import Navbar_pag from "./components/Navbar-pagamento/navbar-pag";
import Footer from "./components/Footer/footer";
import { HiLockClosed } from "react-icons/hi";

export default function Pagamento() {
  return (
    <div className="Body_page">
      <main>
        <Navbar_pag />
        <div className="flex">
          <div className="teste">
            <button>OK</button>
            <div id="res">BRUH</div>
          </div>
        </div>
        
        <div className="lines">
          <div className="Input_design_color">
            <div className="Input_box_border_color">
              <HiLockClosed className="Icon_repass" />
              <input type="password" required />
              <label>Confirmar sua nova senha</label>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="Input_design_color">
            <div className="Input_box_border_color">
              <HiLockClosed className="Icon_repass" />
              <input type="password" required />
              <label>Confirmar sua nova senha</label>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
