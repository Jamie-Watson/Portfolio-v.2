function Navbar() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light justify-content-center text-center">
          <a className="navbar-brand justify-content-center text-center mx-5" href="/#home" style={{ color: "#7c7c7c" }}>
            Jamie Watson
          </a>
          <button
            className="navbar-toggler justify-content-center text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon justify-content-center text-center"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#about" style={{ caretColor: "transparent" }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Resume/Resume_2024.pdf">
                  Resume
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/project.html?tags=personal">
                    Personal
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/project.html?tags=school">
                    Academic
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  