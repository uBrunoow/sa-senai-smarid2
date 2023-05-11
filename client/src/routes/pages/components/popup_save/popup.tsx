import { AiFillCheckCircle } from "react-icons/ai";

export default function Popup() {
    return (
        <div className="save-information" id="Save_id">
            <AiFillCheckCircle className="Check_save_icon" />
            <h1 className="saveh1">Informações salvas com sucesso</h1>
        </div>
    );
}
