import "./index.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="text-containers">
        <div className="container-left">
          <div className="rectangle">
            <div className="white-rectangle">&lt; &gt;</div>
          </div>
          <h1 className="trade-heading">Trade Optmizer</h1>
          <p className="content">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.{" "}
          </p>
        </div>
        <div className="container-middle">
          <div className="market-container">
            <h1 className="market-heading">Maret Insight</h1>
            <p className="content">
              Stay ahead of the market. Get real-time <br /> updates on market
              trends, track top traders'
              <br /> movements, and spot signals from key <br /> influencers.
            </p>
          </div>
          <div className="empty-container">
            <h1></h1>
          </div>
        </div>
        <div className="container-right">
          <img
            src="https://res.cloudinary.com/sinha/image/upload/v1729057022/Sinha/d6gohvnant0xs9ptqzp2.png"
            alt="image"
            className="image"
          />
          <h1 className="market-heading">Risk Guard</h1>
          <p className="content">
            Get alerts on market swings and potential risks before they impact
            your portfolio. This agent helps you navigate volatility and stay
            prepared for anything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
