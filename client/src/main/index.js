import { Link } from "react-router-dom";
import img_binance from '../img/binance.svg';
import img_ethereum from '../img/ethereum.svg';
import img_blockchain from '../img/blockchain.svg';
import img_gallery from '../img/gallery.png';

function Main() {

  return (
    <div className="container">
      <section>
          <div className="main">
              <div className="main__text">
                  <h1 className="main__title">Rent Your Own Creative NFT</h1>
                  <p className="main__desc">Hold the actual NFT and access its utility for the duration rented.</p>
                  <Link  to="/market" className="main__btn main__btn_gradient">Explore Now</Link>
                  <Link  to="/mint" className="main__btn">Mint Your Own RNFT</Link>
                  <ul className="main__list">
                      <li className="main__item"><span className="main__span">37k+</span>Artworks</li>
                      <li className="main__item"><span className="main__span">20k+</span>Artists</li>
                      <li className="main__item"><span className="main__span">99k+</span>Auctions</li>
      
                  </ul>
              </div>
              <div className="main__image">
                  <img  className="main__img" src={img_gallery} alt="img"/>
              </div>

          </div>
          <div className="company">
            <img  src={img_binance} alt="img"/>
            <img  src={img_ethereum} alt="img"/>
            <img  src={img_blockchain} alt="img"/>
          </div>
        
        </section>
      </div>

  );
}

export { Main };
