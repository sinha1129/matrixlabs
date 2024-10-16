import './index.css'

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About EthAi</h1>
      <p className="about-description">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button className='about-button' type='button'>
        Read more
      </button>
      <div className='lists-container'>
        <div className='top'> 
        <div className='item-container'>
            <img className='logo' src="https://res.cloudinary.com/sinha/image/upload/v1729075715/Sinha/xfrtkufqnydwmspvm5tn.png" alt="logo" />
            <h1 className='list-heading'>
                Stay Ahead
            </h1>
            <p className='list-para'>No more guesswork-get clear, trustable insights.</p>
        </div>
        <div className='item-container'>
            <img className='logo' src="https://res.cloudinary.com/sinha/image/upload/v1729075715/Sinha/yehwobchiewkjiuzczgr.png" alt="logo" />
            <h1 className='list-heading'>
               Know Your Assets
            </h1>
            <p className='list-para'>Always stay top of how your investments are performing.</p>
        </div>
        </div>
        <div className='top'>
        <div className='item-container'>
            <img className='logo' src="https://res.cloudinary.com/sinha/image/upload/v1729075715/Sinha/hpxknf1mz3tamrhzgi3n.png" alt="logo" />
            <h1 className='list-heading'>
            Simple, Not Overwhelming
            </h1>
            <p className='list-para'>Our tools are designed to make complex market analysis easy to understand and act on.</p>
        </div>
        <div className='item-container'>
            <img className='logo' src="https://res.cloudinary.com/sinha/image/upload/v1729075715/Sinha/da6niyuertnv6rzqcjol.png" alt="logo" />
            <h1 className='list-heading'>
            Future-Proof
            </h1>
            <p className='list-para'>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default About