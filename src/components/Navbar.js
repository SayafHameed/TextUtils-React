import React from "react";
// import { Link } from "react-router-dom";
// import About from "./About";
export default function Navbar(props) {
  // console.log(props.mode)
  return (
    <nav className={`navbar  navbar-expand-lg bg-${props.mode.backgroundColor}  flex-grow-1`}>
      <div className="container-fluid ">
        <button
          className="navbar-toggler bg-light "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon bg-light`} />
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <a className={`navbar-brand text-${props.mode.color}` } href="#">
            {props.title}
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode.color}`} aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link text-${props.mode.color}`} to="/about">
                About
              </Link>
            </li> */}
          </ul>

          {/* <button type="button" className="btn btn-dark m-2">
            Dark
          </button> */}

          <form className="d-flex" role="search">
            <input
              className={`form-control me-2 bg-${props.mode.backgroundColor} text-${props.mode.color}`}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
