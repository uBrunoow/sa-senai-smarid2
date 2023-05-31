import "./questions.sass";
import Swiper1 from "./Swiper-1/swiper-1";
import { ParagraphQuestion, Question } from "./styles"

export default function Questions() {
  return (
    <Question className="quest-answer">
      <div className="pricing-title">
        <p className="p-roxo">TESTIMONIAL OF CLIENTS</p>
        <h1 className="title-initial-2">
          What they say about us<span className="last-letter">.</span>
        </h1>
        <ParagraphQuestion className="p-branco">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />{" "}
          accusantium
        </ParagraphQuestion>
      </div>
      <div className="quest-container swiper">
        <div className="quest-content">
          <div className="card-wrapper swiper-wrapper">
            <Swiper1 />
          </div>
        </div>
      </div>
    </Question>
  );
}
