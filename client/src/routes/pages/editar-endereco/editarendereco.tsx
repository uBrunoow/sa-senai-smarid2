import "./editarendereco.sass";
import { AiFillLock } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md"


export default function EditarEndereco() {

    function FecharEdit() {
        var EditAdd = document.getElementById("Edit_address") as HTMLDivElement;        EditAdd.style.display = "none";
    }

    return (
        <div className="EditarEndereco" id="Edit_address">
            <div className="Edit_formbox">
                <div className="title_choose">
                    <div className="Title_icons">
                        <MdEditSquare className="Icon_choose" />
                        <h1 className="Chosse_h1">Editar endereço</h1>
                    </div>
                    <div
                        className="Close_icons"
                        id="Close_img"
                        onClick={FecharEdit}
                    >
                        <AiFillCloseCircle className="icon_fechar" />
                    </div>
                </div>
                <hr className="Choose_line" />
                <form className="Form_address">
                    <div className="lines">
                        <div className="Input_design_color">
                            <div className="Input_box_border_color Lock_input" >
                                <label>CEP</label>
                                <AiFillLock className="Icon_lock"/>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>Logradouro</label>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="Input_design_color">
                            <div className="Input_box_border_color Lock_input">
                                <label>Número</label>
                                <AiFillLock className="Icon_lock"/>
                            </div>
                        </div>

                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>Complemento</label>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>Referencia</label>
                            </div>
                        </div>

                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>Cidade</label>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>Bairro</label>
                            </div>
                        </div>

                        <div className="Input_design_color">
                            <div className="Input_box_border_color">
                                <input type="text" required />
                                <label>UF</label>
                            </div>
                        </div>
                    </div>
                    <div className="Flex-button-address">
                        <label
                            className="Add_Address_btn"
                            htmlFor="add-address"
                        >
                            Salvar alterações
                        </label>
                        <input
                            type="submit"
                            name="add-address"
                            id="add-address"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
