import "../assets/css/main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCarousel({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 py-5 position-relative">
        <div className="card rounded-container p-4">
          <div className="d-flex overflow-hidden w-100">
            <div
              className="d-flex w-100"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-100 d-flex justify-content-center px-2"
                >
                  <div className="card w-100 project-card">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <ul className="list-inline card-text">
                        {project.tags.map((tag, i) => (
                          <li
                            key={i}
                            className="list-inline-item label-outline"
                          >
                            <span>{tag}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/projects/${project.id}`}
                        className="btn btn-dark mt-2"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator carousel-rectangles mx-2 btn ${
                  index === currentSlide
                    ? "dark-background"
                    : "light-background"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <button
          className="carousel-control-prev position-absolute top-50 translate-middle-y left-arrow"
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>

        <button
          className="carousel-control-next position-absolute top-50 translate-middle-y right-arrow"
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
