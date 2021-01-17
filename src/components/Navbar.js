import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mini Tumbler
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/About">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
//    <Router>
//      <Navbar />
//      <Switch>
//        <Route exact path="/">
//          <home />
//        </Route>
//        <Route exact path="/About">
//          <About />
//        </Route>
//        <Route exact path="/Gallery">
//          <Fetching />
//        </Route>
//        <Route exact path="/">
//          <Services />
//        </Route>
//      </Switch>
//      <Footer />
//    </Router>;
// <button
//   className="navbar-toggler"
//   type="button"
//   data-bs-toggle="collapse"
//   data-bs-target="#navbarNav"
//   aria-controls="navbarToggleExternalContent"
//   aria-expanded="false"
//   aria-label="Toggle navigation"
// >
//   <span className="navbar-toggler-icon"></span>
// </button>
