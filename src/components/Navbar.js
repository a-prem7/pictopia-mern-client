import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Pictopia</div>
      </Link>
    </nav>
  );
}

export default Navbar;
