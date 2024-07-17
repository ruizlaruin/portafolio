import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/img/logo.png" alt="AluraFlix Logo" className="logo" />
      <div className="buttons">
        <Link to="/"><button  className="btn btn-primary">HOME</button></Link>
        <Link to="/newvideo" ><button className="btn btn-secondary">NUEVO VIDEO</button></Link>
      </div>
    </nav>
  )
}

export default Navbar;
