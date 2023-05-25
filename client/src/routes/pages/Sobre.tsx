import "../sass/sobre.sass";
import Navbar from "../../components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import { MdLibraryAddCheck } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { BsFillBookmarksFill } from "react-icons/bs";
import bgSobre from "/src/assets/IMG/bg-sobre.svg";

export default function Sobre() {
  return (
    <div className="Sobre">
      <Navbar />
      <div className="Title_page_about">
        <p className="p-roxo">WELCOME TO</p>
        <h1 className="Title_about">
          {" "}
          A maior e-commerce de Óculos de realidade virtual no Brasil
          <span className="last-letter">:</span>
        </h1>
        <p className="Paragraph_about">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        </p>
      </div>
      <div className="Alt_content">
        <div className="Alt_text">
          <div className="Paragraph_alt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis nisi possimus architecto facilis quo quasi suscipit enim accusamus recusandae nesciunt, rem dolores maiores quidem autem voluptates itaque odit dolorum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, numquam! Nam, accusamus voluptas soluta tempore possimus necessitatibus voluptates consequuntur porro corporis. Perspiciatis fugit, quos repudiandae praesentium cupiditate qui! Accusantium, aliquam!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto fugit, deleniti quis doloremque minima incidunt blanditiis tempora veniam. Numquam architecto rem qui molestias eius corrupti voluptatem animi, culpa voluptates tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit libero deserunt neque
            </p>
          </div>
          <div className="Image_alt">
            <img src={bgSobre} alt="" />
          </div>
        </div>
      </div>

      <div className="FlexValues">
        <div className="Mission">
          <h1>MISSION</h1>
          <div className="Image_Values">
            <MdLibraryAddCheck className="Icon_sobre" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusamus odit tenetur quo voluptate facere qui amet! Qui maxime
            iure dignissimos mollitia sed nobis nisi dolorum, eos deserunt eaque
            in?
          </p>
        </div>
        <div className="Vision">
          <h1>VISION</h1>
          <div className="Image_Values">
            <HiOutlineEye className="Icon_sobre" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusamus odit tenetur quo voluptate facere qui amet! Qui maxime
            iure dignissimos mollitia sed nobis nisi dolorum, eos deserunt eaque
            in?
          </p>
        </div>
        <div className="Values">
          <h1>VALUES</h1>
          <div className="Image_Values">
            <BsFillBookmarksFill className="Icon_sobre" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            accusamus odit tenetur quo voluptate facere qui amet! Qui maxime
            iure dignissimos mollitia sed nobis nisi dolorum, eos deserunt eaque
            in?
          </p>
        </div>
      </div>
      <div className="Btn_contact">
        <a href="" className="Contact">
          ENTRE EM CONTATO CONOSCO
        </a>
      </div>
      <Footer/>
    </div>
  );
}
