import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      navbar.classList.add("scrolled");
    };
    handleScroll();
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-dark fs-2">
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
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div></div>
          <div className="navbar-nav fw-semibold fs-5 outline-nav center-nav d-flex align-items-center">
            <Link to={"/games"} className="text-dark nav-link">
              All Games
            </Link>
            <Link to={"/adv-search"} className="text-dark nav-link">
              Find Yours
            </Link>
          </div>
          <div className="navbar-nav fs-3">
            <div className="me-3 cursor-pointer">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="cursor-pointer">
              <i className="fa-regular fa-circle-user"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
