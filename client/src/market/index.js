import { useMarketplace } from "../contexts/MarketplaceContext";
import { Card } from "../card";
import { MarketCardContent } from "./MarketCardContent";


function Market() {
  const { listings } = useMarketplace();

  const cards = listings.map(listing =>
    <Card
      data={listing}
      key={`market-nft-${listing.nftContractAddress}-${listing.tokenId}`}
    >
      <MarketCardContent data={listing} />
    </Card>
  );

  return (
      <div>
        <h2 className="title">Rent market</h2>
          <div className="cards">
              {cards}
          </div>
      </div>
  );
}

export { Market };
