const About = () => {
  const textAlignJustify = {
    textAlign: "justify",
  };

  const statisticsImagePosition = {
    top: "202%",
    left: "40%",
  };

  return (
    <div className="py-6">
      <div className="container py-1">
        <div className="row justify-content-evenly">
          <div className="col col-md-6">
            <img
              src={process.env.PUBLIC_URL + "assets/meet.png"}
              alt="meeting"
              className="z-0 "
            />
            <img
              src={process.env.PUBLIC_URL + "assets/statistic.png"}
              alt="meeting"
              className="z-1 position-absolute rounded-4"
              style={statisticsImagePosition}
            />
          </div>
          <div className="col col-md-4 pe-1">
            <span className="px-2 py-1 bg-secondary rounded-4">
              Digital Marketing Agency
            </span>
            <div className="mt-4 mb-5">
              <h2 className="fs-2 fw-bold">
                Fresh Ideas for your business design.
              </h2>
            </div>
            <div className="mb-5">
              <p className="fs-5" style={textAlignJustify}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="row mb-2">
              <div className="col col-md-2">
                <img
                  src={process.env.PUBLIC_URL + "assets/avatar1.png"}
                  alt="avatar1"
                />
              </div>
              <div className="col col-md-10">
                <h4 className="fs-4 fw-bold">Gardy</h4>
                <p className="fs-5" style={textAlignJustify}>
                  Dicta maiores architecto rerum optio fugit iste tenetur fuga
                  debitis sit quis sunt atque itaque, reiciendis sapiente porro
                  ipsa, laborum quod nulla, inventore numquam recusandae dolores
                  minima omnis voluptas?
                </p>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col col-md-2">
                <img
                  src={process.env.PUBLIC_URL + "assets/avatar2.png"}
                  alt="avatar2"
                />
              </div>
              <div className="col col-md-10 mb-2">
                <h4 className="fs-4 fw-bold">Herdric</h4>
                <p className="fs-5" style={textAlignJustify}>
                  Dicta maiores architecto rerum optio fugit iste tenetur fuga
                  debitis sit quis sunt atque itaque, reiciendis sapiente porro
                  ipsa, laborum quod nulla, inventore numquam recusandae dolores
                  minima omnis voluptas?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
