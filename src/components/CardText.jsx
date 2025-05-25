import "../assets/css/main.css";

function CardText({ align = "left", text, title, image }) {
  const isLeft = align === "left";

  return (
    <div
      id="about"
      className="container-my-5 p-5 mx-5 my-5 justify-content-center no-caret light-background rounded-container"
    >
      <div className="row align-items-stretch">
        {isLeft ? (
          <>
            <div className="col-12 col-lg-8 d-flex mb-3">
              <div className="card h-100 w-100 rounded-container">
                <div className="card-body d-flex flex-column justify-content-center px-2">
                  <h1 className="card-title display-4 about-me-text text-center">
                    {title}
                  </h1>
                  <p className="card-text about-me-text mt-3 mb-0">{text}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex mb-3">
              <div className="card h-100 w-100 p-3 rounded-container">
                <img
                  className="card-img-top img-fluid object-fit-cover h-100 rounded-container"
                  src={image}
                  alt="Card Visual"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-12 col-lg-4 d-flex mb-3">
              <div className="card h-100 w-100 p-3 rounded-container">
                <img
                  className="card-img-top img-fluid object-fit-cover h-100 rounded-container"
                  src={image}
                  alt="Card Visual"
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-8 d-flex mb-3">
              <div className="card h-100 w-100 rounded-container">
                <div className="card-body d-flex flex-column justify-content-center px-2">
                  <h1 className="card-title display-4 about-me-text text-center">
                    {title}
                  </h1>
                  <p className="card-text about-me-text mt-3 mb-0">{text}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardText;
