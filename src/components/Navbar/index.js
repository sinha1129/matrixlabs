
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
             <a>.</a>
        </div>
      <div className="text-container">
        <h1 className="nav-item">Feautres</h1>
        <h1 className="nav-item">Why Us</h1>
        <h1 className="nav-item">Takenomics</h1>
        <h1 className="nav-item">Roadmap</h1>
      </div>
      <div className="login-container">
        <h1 className="login-text">Login</h1>
        <button className="whitepaper-button" type="button">Whitepaper</button>
      </div>
    </nav>
  );
};

export default Navbar; 