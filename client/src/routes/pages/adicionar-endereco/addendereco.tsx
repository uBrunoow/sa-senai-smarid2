import { AiFillCloseCircle, AiFillLock } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";

import "./addendereco.sass";

export default function AdicionarEndereco() {
  function FecharEdit() {
    var CloseChAdd = document.getElementById("Choose_add_id") as HTMLDivElement;
    CloseChAdd.style.display = "none";
  }

  return (
    <div className="Choose_add" id="Choose_add_id">
      <div className="">
        <div className="title_choose">
          <div className="Title_icons">
            <MdEditSquare className="Icon_choose" />
            <h1 className="Chosse_h1">Escolha o seu endereço</h1>
          </div>
          <div className="Close_icons" id="Close_img" onClick={FecharEdit}>
            <AiFillCloseCircle className="icon_fechar" />
          </div>
        </div>
        <hr className="Choose_line" />
      </div>
      <div className="choose_add_flex">
        <div className="endereco-principal-choose">
          <div className="overlay-1-choose"></div>
          <div className="enderecos-infos-choose">
            <h1>Endereço Principal</h1>
            <h2>(PADRÃO)</h2>
          </div>
          <div className="enderecos-subinfos-choose">
            <p>
              {" "}
              RUA ARNALDO PINTO DA ROÇA
              <br />
              Número: 6889
              <br />
              CEP 89234-881, CARPAZINHA-SR
            </p>
          </div>
          <div className="endereco-editar-choose">
            <button>EDITAR</button>
          </div>
        </div>
        <div className="endereco-outros-choose">
          <div className="overlay-2-choose"></div>
          <div className="enderecos-infos-choose">
            <h1>Endereço Secundário</h1>
          </div>
          <div className="enderecos-subinfos-choose">
            <p>
              {" "}
              RUA ARNALDO PINTO DA ROÇA
              <br />
              Número: 6889
              <br />
              CEP 89234-881, CARPAZINHA-SR
            </p>
          </div>
          <div className="endereco-editar-choose">
            <button>EDITAR</button>
            <button>SELECIONAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
