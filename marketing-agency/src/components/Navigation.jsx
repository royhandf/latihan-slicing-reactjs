import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand my-1" href="/">
          <img
            src={process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="logo"
            width={160}
            height={50}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="/company">
                Company
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" aria-current="page" href="/shop">
                Shop
              </a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-secondary mx-4 my-1 fw-medium fs-5 d-md-block d-none"
        >
          <span className="fs-5">Get Started</span>{" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
