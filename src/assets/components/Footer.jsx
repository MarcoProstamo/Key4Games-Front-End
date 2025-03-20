export default function Footer() {
  return (
    <footer className="bg-darker text-light py-5">
      <div className="container">
        <div className="row pb-4">
          {/* Logo */}
          <div className="col-md-3 mb-3 fs-1">
            <i className="fa-solid fa-key me-2"></i> Key4Games
          </div>

          {/* Support */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">SUPPORT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Help Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Support Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Don't Sell or Share My Info
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">ABOUT</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Key4Games
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-3">
            <h5 className="text-secondary">FIND US ON SOCIAL MEDIA</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-twitch"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-light fs-4">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-secondary border-top pt-3">
          <p>© 1764-2069 Key4Games LLC | ALL RIGHTS RESERVED</p>
          <p className="small">
            KeyGames, Key4Games, and all related trademarks are property of
            Key4Games.
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" className="text-light text-decoration-none">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-light text-decoration-none">
              TERMS OF SERVICE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
