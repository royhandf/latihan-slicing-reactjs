import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const workingImagePosition = {
    top: "20%",
    right: "10%",
  };

  const personImagePosition = {
    top: "40%",
    right: "25%",
  };

  return (
    <div className="bg-secondary pt-6 pb-5">
      <div className="container py-1">
        <div className="row justify-content-between">
          <div className="col col-md-7">
            <span className="px-2 py-1 bg-primary rounded-4 text-white">
              Digital Marketing Agency
            </span>
            <div className="mt-5 mb-4">
              <h1 className="fs-1 fw-bold">
                Advanced analytics to grow your business
              </h1>
            </div>
            <div className="mt-4 mb-5">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="row">
              <div className="col-3">
                <a href="/" className="btn btn-dark py-2 px-5 fs-5">
                  Get Started
                </a>
              </div>
              <div className="col-4">
                <a
                  href="/"
                  className="btn btn-outline-primary py-2 px-5 text-dark"
                >
                  <span className="fs-5">How it works</span>{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
          <div className="col col-md-5 text-center">
            <img
              src={process.env.PUBLIC_URL + "assets/people.png"}
              alt="people"
              className="z-2 position-absolute mt-4"
              style={personImagePosition}
            />
            <img
              src={process.env.PUBLIC_URL + "assets/work.png"}
              alt="work"
              className="z-1 position-absolute mt-1"
              style={workingImagePosition}
            />
            <img
              src={process.env.PUBLIC_URL + "assets/border.png"}
              alt="border"
              className="z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
