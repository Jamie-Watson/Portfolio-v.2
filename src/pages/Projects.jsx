import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardText from "../components/CardText";
function Projects() {
  const { id } = useParams();

  return (
    <>
      <div
        className="grid-background h-10 align-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Navbar />
        <div className="container py-5 h-100">
          <CardText
            title={`Website: "${id}" still in development`}
            text=""
            image={`/assets/images/${id}.jpg`}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
