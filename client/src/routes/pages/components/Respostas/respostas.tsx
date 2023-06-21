import "./respostas.sass";
import UserImage from "/src/assets/IMG/Rectangle 335.svg";

export default function Respostas() {
  return (
    <div>
      <hr className="LineResposta" />
      <div id="Mostrar_Resposta">
        
        <div>
          <img src={UserImage} alt="" className="ImageUserDiv" />
        </div>

        <div>
          <div className="NameQuestion">Bruno Werner</div>
          <div className="DateQuestion">(21/02/23)</div>
          <div className="UserQuestion">
            Gostaria de saber se existe a possibilidade de devolição do produto
          </div>
        </div>
      </div>
    </div>
  );
}
