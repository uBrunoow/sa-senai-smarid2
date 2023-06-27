import { ParagraphContent } from "../Main-1/styles";
import "../Pricing/pricing.sass";
import { DolarSignPromo, ParagraphPromos, Price, PriceTitlePromo, Promos } from "./styles";

export default function Pricing() {
    return (
        <Price className="pricing">
            <div className="pricing-wrapper">
                <div className="pricing-content">
                    <div className="pricing-title">
                        <p className="p-roxo">PRICING</p>
                        <h1 className="title-initial-2">
                            A pricing that don't hurt the bank
                            <span className="last-letter">.</span>
                        </h1>
                        <ParagraphContent className="p-branco">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem <br /> accusantium
                        </ParagraphContent>
                    </div>

                    <div className="promotions-price">
                        <Promos className="promo1">
                            <h1>Games & apps</h1>
                            <ParagraphPromos className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium
                            </ParagraphPromos>
                            <DolarSignPromo className="rs">R$</DolarSignPromo>
                            <PriceTitlePromo className="price">120,00</PriceTitlePromo>
                            <div className="produtos-imagens PImg1">
                                <img src="" alt="" />
                            </div>
                            <div className="btnCart">
                                <button>
                                    <a href="">Add to cart</a>
                                </button>
                            </div>
                        </Promos>
                        <Promos className="promo2">
                            <h1>VR glasses</h1>
                            <ParagraphPromos className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium
                            </ParagraphPromos>
                            <DolarSignPromo className="rs">R$</DolarSignPromo>
                            <PriceTitlePromo className="price">3400,00</PriceTitlePromo>
                            <div className="produtos-imagens PImg2"></div>
                            <div className="btnCart purple">
                                <button>
                                    <a href="">Add to cart</a>
                                </button>
                            </div>
                        </Promos>
                        <Promos className="promo3">
                            <h1>Acessories</h1>
                            <ParagraphPromos className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium
                            </ParagraphPromos>
                            <DolarSignPromo className="rs">R$</DolarSignPromo>
                            <PriceTitlePromo className="price">100,00</PriceTitlePromo>
                            <div className="produtos-imagens PImg3">
                                <img src="" alt="" />
                            </div>
                            <div className="btnCart">
                                <button>
                                    <a href="">Add to cart</a>
                                </button>
                            </div>
                        </Promos>
                    </div>
                </div>
            </div>
        </Price>
    );
}
