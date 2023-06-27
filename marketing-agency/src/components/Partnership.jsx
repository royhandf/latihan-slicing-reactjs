const Partnership = () => {
  return (
    <div className="py-7">
      <div className="container py-1">
        <div className="d-flex justify-content-evenly mb-6">
          <img
            src={process.env.PUBLIC_URL + "assets/brand1.png"}
            alt="partner1"
            width={255}
          />
          <img
            src={process.env.PUBLIC_URL + "assets/brand2.png"}
            alt="partner2"
            width={255}
          />
          <img
            src={process.env.PUBLIC_URL + "assets/brand3.png"}
            alt="partner3"
            width={255}
          />
          <div className="col col-md-2">
            <img
              src={process.env.PUBLIC_URL + "assets/brand4.png"}
              alt="partner4"
              width={255}
            />
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <img
            src={process.env.PUBLIC_URL + "assets/brand5.png"}
            alt="partner5"
            width={255}
          />
          <img
            src={process.env.PUBLIC_URL + "assets/brand6.png"}
            alt="partner6"
            width={255}
          />
          <img
            src={process.env.PUBLIC_URL + "assets/brand7.png"}
            alt="partner7"
            width={255}
          />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
