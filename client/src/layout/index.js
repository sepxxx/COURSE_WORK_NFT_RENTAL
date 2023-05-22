import { Outlet, Link } from "react-router-dom";

import LogoSrc from "../img/logo.png";

function Layout() {
  return (
    <div className="layout">
      <header className = "header">
          <Link className="header__logo" to="/main"></Link>
          <nav className="header__nav">
              <ul className = "header__list">
                  <Link className="header__link" to="/market"><li  className="header__item">Market</li></Link>
                  <Link className="header__link" to="/owned"><li className="header__item">Owned NFTs</li></Link>
                  <Link className="header__link" to="/rented"><li className="header__item">Rented NFTs</li></Link>
                  <Link className="header__link" to="/mint"><li className="header__item">Mint rNFTs</li></Link>

              </ul>
          </nav>
      </header>
      <Outlet />
    </div>
  );
}

export { Layout };
