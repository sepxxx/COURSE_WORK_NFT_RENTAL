import { useRef } from "react";
import { useMarketplace } from "../contexts/MarketplaceContext";

function Mint() {
  const { mint } = useMarketplace();
  const inputRef = useRef(null);

  return (
    <div className="title" id="mint">
      <h1  >Mint new NFT</h1>
      <input className="gradient mint__input" ref={inputRef} placeholder="ipfs://..." />
      <button className="gradient mint__btn" onClick={() => void mint(inputRef.current.value)}>Mint</button>
    </div>
  );
}

export { Mint };
