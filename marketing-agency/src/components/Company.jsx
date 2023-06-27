const Company = () => {
  const textAlignJustify = {
    textAlign: "justify",
  };

  const peopleImagePosition = {
    top: "350%",
    right: "8%",
  };

  return (
    <div className="bg-light pt-6 pb-7">
      <div className="container py-1">
        <div className="row justify-content-center">
          <div className="col col-md-7">
            <span className="px-2 py-1 bg-secondary rounded-4 fs-5">
              Top Leading Company
            </span>
            <div className="mt-5 mb-4">
              <h2 className="fs-2 fw-bold">
                Fresh Ideas for your business design, Top digital marketing
                service company
              </h2>
            </div>
            <div className="mt-4 mb-5">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="d-flex gap-6">
              <div className="row flex-column">
                <div className="col mb-1">
                  <img
                    src={process.env.PUBLIC_URL + "assets/avatar6.png"}
                    alt="avatar6"
                  />
                  <span className="ms-2 fw-bold">Guy Hawkins</span>
                </div>
                <div className="col">
                  <p className="fs-5" style={textAlignJustify}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.
                  </p>
                </div>
              </div>
              <div className="row flex-column">
                <div className="col mb-1">
                  <img
                    src={process.env.PUBLIC_URL + "assets/avatar7.png"}
                    alt="avatar7"
                  />
                  <span className="ms-2 fw-bold">Darlene Robertson</span>
                </div>
                <div className="col">
                  <p className="fs-5" style={textAlignJustify}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md-4 text-center">
            <img
              src={process.env.PUBLIC_URL + "assets/people.png"}
              alt="people"
              className="z-1 position-absolute"
              style={peopleImagePosition}
            />
            <img
              src={process.env.PUBLIC_URL + "assets/room.png"}
              alt="work"
              className="z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
