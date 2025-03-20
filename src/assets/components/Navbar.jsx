import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-darker">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-light">
          <i className="fa-solid fa-key me-2"></i> Key4Games
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"} className="text-light nav-link">
              Home
            </Link>
            <Link to={"/about-us"} className="text-light nav-link">
              About Us
            </Link>
            <Link to={"/work-us"} className="text-light nav-link">
              Work with Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
