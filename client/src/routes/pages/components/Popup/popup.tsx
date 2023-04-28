import "./popup.sass"
import { BsFillCheckCircleFill } from "react-icons/bs"


export default function Popup() {
    return (
        <div>
            <div className="Box_popup">
                <div className="IconsPopup">
                    <BsFillCheckCircleFill className="Icons_popup"/>
                </div>
                <div className="Text_popup">
                    <h1 className="Title_popup">Produto adicionado ao carrinho</h1>
                </div>
            </div>
        </div>
    );
}
