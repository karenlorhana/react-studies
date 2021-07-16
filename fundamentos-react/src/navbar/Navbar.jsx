import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-bar" id="nav-bar">
        <Link to="/" className="initial-page">
          PÁGINA INCIAL
        </Link>
        <Link to="/Login">ENTRAR</Link>
        <Link to="/Signup">CRIAR CONTA</Link>
        <Link to="/About">SOBRE</Link>
        
        {/* <Link to="javascript:void(0);" className="icon">
                <i className="fa fa-bars"></i>
            </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;


