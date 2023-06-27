import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="py-7">
        <div className="container">
          <div className="row mx-5">
            <div className="col col-md-3">
              <div className="d-flex flex-column">
                <div className="mb-4">
                  <img
                    src={process.env.PUBLIC_URL + "assets/logo.png"}
                    alt="logo"
                    width={160}
                  />
                </div>
                <div className="ms-2 mb-1">
                  <h2 className="fw-bold fs-4">Eleanor Pena</h2>
                </div>
                <div className="ms-2">
                  <p className="fs-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="d-flex flex-column">
                <div className="mb-3">
                  <h2 className="fs-4 fw-bold">ABOUT US</h2>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Mission & Vision</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />{" "}
                  <p className="fs-5 ms-1">Our Company</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />{" "}
                  <p className="fs-5 ms-1">Our Projects</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />{" "}
                  <p className="fs-5 ms-1">Our Team</p>
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="d-flex flex-column">
                <div className="mb-3">
                  <h2 className="fs-4 fw-bold">DISCOVER</h2>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Projects & Research</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Clients Review</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Our Projects</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Our Team</p>
                </div>
              </div>
            </div>
            <div className="col col-md-3">
              <div className="d-flex flex-column">
                <div className="mb-3">
                  <h2 className="fs-4 fw-bold">USEFUL LINKS</h2>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Contact US</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Terms & Conditions</p>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon icon={faChevronRight} height={16} />
                  <p className="fs-5 ms-1">Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container py-1">
          <p className="text-white text-center pt-5 pb-2">
            Copyright, All Rights Resreved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
