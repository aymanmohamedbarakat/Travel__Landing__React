import Logo from "../assets/images/Logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-5">
        <div className="footer__Title text-center">
          <h1 className="display-6">Explore the world with My Dream Place</h1>
          <p className="lead text-primary">
            Discover new places and experiences
          </p>
        </div>

        <div className="footer__main mt-5 d-flex justify-content-center align-items-center">
          <div className="row">
            {/* Logo and Description */}
            <div className="logo col-md-3 col-12 mb-4 d-flex flex-column flex-md-row align-items-center align-items-md-start text-center text-md-start gap-3">
                <img
                src={Logo}
                alt="My Dream Place Logo"
                className="img-fluid mb-3"
              />
              <div className="logo__text">
                <h5>My Dream Place</h5>
                <p>Your next goto companion for travel</p>
              </div>

            </div>

            {/* Company Links */}
            <div className="col-md-1 col-12 text-center text-md-start ">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Advertising
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore Links */}
            <div className="col-md-3 col-12 text-center text-md-start  px-5 ">
              <h5>Explore</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Australia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    New Zealand
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    United States America (USA)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Greece
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Maldives
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Singapore
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms and Policies Links */}
            <div className="col-md-2 col-12 text-center text-md-start ">
              <h5>Terms and Policies</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Reward system policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="col-md-3 col-12 text-center text-md-start ">
              <h5>Help</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Cancel your bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Use Coupon
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    Refund Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    International Travel Documents
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row">
          <div className="col-12 text-md-end text-center">
            <p className="mb-0 mt-5 px-3 ">
              &copy; {new Date().getFullYear()} My Dream Place. All rights reserved.
            </p>
          </div>
        </div>

    </footer>
  );
}