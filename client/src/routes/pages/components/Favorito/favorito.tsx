export default function Favorito1() {
    return (
        <div className="favoritos-wrapper">
          <div className="produto-content">
              <div className="img-info">
                  <div className="img">
                      <div className="produto-imagem">
                          <img src="/IMG/img-produtos/produto1.svg" alt=""/>
                      </div>
                  </div>
                  <div className="infos">
                      <div className="produto-nome">
                          <p>Óculos Realidade Virtual VR Oculus Meta Quest 2 256gb</p>
                      </div>
                      <div className="promos">
                          <div className="stars">
                              <img src="/IMG/img-produtos/Stars.svg" alt=""/>
                          </div>
                          <div className="produto-preco">
                              <p>R$ 3.799,99</p>
                          </div>
                              <div className="descontos">
                                  <p>FRETE <br/>
                                     GRATIS</p>
                              </div>
                      </div>
                  </div>
                  <div className="comprar">
                      <div className="favoritos-favoritos">
                          <img src="/IMG/heart copy.svg" alt="" id="P1"/>
                      </div>
                      <div className="btnComprar-favoritos">
                          <button type="submit">
                               <a href="#"> <img src="/IMG/img-produtos/Carrinho.svg" alt=""/> </a>
                          </button>
                      </div>
                  </div>
            </div>
            <hr/>  
            </div>
        </div>    
    )
}