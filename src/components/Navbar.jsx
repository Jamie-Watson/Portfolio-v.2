function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top dark-background justify-content-center text-center no-caret">
        <a
          className="navbar-brand justify-content-center text-center mx-5 navbar-text"
          href="/#home"
        >
          Jamie Watson
        </a>
        <button
          className="navbar-toggler justify-content-center text-center navbar-text"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon justify-content-center text-center navbar-light"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto mx-5">
            <li className="nav-item">
              <a className="nav-link navbar-text" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navbar-text"
                href="/Resume/Resume_2024.pdf"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="/#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-text" href="/#contact">
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
