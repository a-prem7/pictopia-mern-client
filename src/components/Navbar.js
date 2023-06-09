import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nav">
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "25px",
          textAlign: "left",
        }}
      >
        <div className="about"> About</div>
      </Link>
      <Link
        to="/create"
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "25px",
        }}
      >
        <div className="create">Create </div>
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontFamily: "monospace",
          fontSize: "30px",
        }}
      >
        <div className="maintitle">
          Pictopia<span className="registered-symbol">&#xae;</span>{" "}
        </div>
      </Link>
    </nav>
  );
}

export default Navbar;
