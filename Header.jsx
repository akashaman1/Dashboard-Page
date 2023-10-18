import React from "react";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <div className="card-icon d-flex align-items-center justify-content-center">
                  <i className="bi bi-grid"></i>
                </div>&nbsp;
            <span className="d-none d-lg-block">Dashboard</span>
          </a>
          
        </div>
        {/* <!-- End Logo --> */}
        <div className="title">     Hello Akash </div>
        <div className="search-bar">
          
          <form
            className="search-form d-flex align-items-right"
            method="POST"
            action="#"
          >
            
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- End Search Bar --> */}

        <nav className="header-nav mr-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
            {/* <!-- End Search Icon--> */}
            </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>
    </>
  );
};

export default Header;
