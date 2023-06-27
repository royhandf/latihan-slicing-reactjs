const Testimonial = () => {
  const textAlignJustify = {
    textAlign: "justify",
  };

  return (
    <div className="pt-5 pb-6">
      <div className="container">
        <div className="row flex-column mb-4">
          <div className="col col-md-5 mb-2 mx-auto">
            <h1 className="fs-2 fw-bold text-center">
              Fresh Ideas for your business design.
            </h1>
          </div>
          <div className="col col-md-6 mx-auto">
            <p className="fs-4 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="row justify-content-evenly mb-4">
          <div className="col col-md-4">
            <div className="row mx-3">
              <div className="col col-md-2">
                <img
                  src={process.env.PUBLIC_URL + "assets/avatar3.png"}
                  alt="avatar3"
                />
              </div>
              <div className="col col-md-10 mb-2">
                <h4 className="fs-4 fw-bold">Eleanor Pena</h4>
                <p className="fs-5" style={textAlignJustify}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="row mx-3">
              <div className="col col-md-2">
                <img
                  src={process.env.PUBLIC_URL + "assets/avatar4.png"}
                  alt="avatar4"
                />
              </div>
              <div className="col col-md-10 mb-2">
                <h4 className="fs-4 fw-bold">Cody Fisher</h4>
                <p className="fs-5" style={textAlignJustify}>
                  Consectetur adipiscing elit duis tristique sollicitudin nibh
                  sit amet commodo nulla facilisi nullam vehicula ipsum a arcu
                  cursus vitae congue
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-4">
            <div className="row mx-3">
              <div className="col col-md-2">
                <img
                  src={process.env.PUBLIC_URL + "assets/avatar5.png"}
                  alt="avatar5"
                />
              </div>
              <div className="col col-md-10 mb-2">
                <h4 className="fs-4 fw-bold">Leslie Alexander</h4>
                <p className="fs-5" style={textAlignJustify}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
