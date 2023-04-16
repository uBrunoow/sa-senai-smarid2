import '../Pricing/pricing.sass'
import '../Pricing/style.css'

export default function Pricing() {
    return(
        <main className="pricing">
            <div className="pricing-wrapper">
                <div className="pricing-content">
                    <div className="pricing-title">
                        <p className="p-roxo">PRICING</p>
                        <h1 className="title-initial-2">A pricing that don't hurt the bank<span className="last-letter">.</span></h1>
                        <p className="p-branco">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/> accusantium
                        </p>
                    </div>

                    <div className="promotions-price">
                        <div className="promo1">
                            <h1>Games & apps</h1>
                            <p className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                            <p className="rs">R$</p>
                            <h3 className="price">00,00</h3>
                            <div className="produtos-imagens"></div>
                            <div className="btnCart">
                                <button>
                                    <a href="">
                                        Add to cart
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="promo2">
                            <h1>VR glasses</h1>
                            <p className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                            <p className="rs">R$</p>
                            <h3 className="price">00,00</h3>
                            <div className="produtos-imagens"></div>
                            <div className="btnCart purple">
                                <button>
                                    <a href="">
                                        Add to cart
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="promo3">
                            <h1>Acessories</h1>
                            <p className="p-promo">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            </p>
                            <p className="rs">R$</p>
                            <h3 className="price">00,00</h3>
                            <div className="produtos-imagens"></div>
                            <div className="btnCart">
                                <button>
                                    <a href="">
                                        Add to cart
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}