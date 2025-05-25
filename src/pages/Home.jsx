import "../assets/css/main.css";
import Navbar from "../components/Navbar";
import CardText from "../components/CardText";
import ProjectCarousel from "../components/ProjectCarousel";
import Contact from "../components/Contact";
function Home() {
  const comingSoon = () => {
    window.alert("");
  };
  const projects = [
    {
      id: "service-site",
      title: "Service Site",
      image: "/assets/images/service-site.jpg",
      tags: ["School Project"],
    },
    {
      id: "ecommerce-site",
      title: "E-commerce site",
      image: "/assets/images/ecommerce-site.jpg",
      tags: ["School Project"],
    },
    {
      id: "game",
      title: "Game",
      image: "/assets/images/game.jpg",
      tags: ["School Project", "Game"],
    },
    {
      id: "analytics-site",
      title: "Analytics site",
      image: "/assets/images/analytics-site.jpg",
      tags: ["School Project"],
    },
  ];

  return (
    <>
      <div className="grid-background">
        <Navbar />

        <div
          id="home"
          className="container-my-5 py-5 px-5 no-caret light-background"
        >
          <div className="row py-5 justify-content-center">
            <div className="col-lg-6 justify-content-center pt-5 mb-3">
              <div className="text-center">
                <img
                  src="/assets/images/profile.jpeg"
                  className="img-fluid rounded-circle profile-pic"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6 justify-content-center px-5 pt-5 grid-background rounded-container align-content-center mb-3">
              <h1 className="h1 h-sm display-1 display-md-3 text-wrap text-break text-center">
                Hi, I'm a software engineer!
              </h1>
            </div>
          </div>
        </div>

        <section className="curved-bottom mb-5 light-background"></section>
        <div className="bottom-negative-space"></div>

        <CardText
          align="left"
          title="About Me"
          text="I'm a third-year Software Engineering student at the University of Ottawa, with a strong interest in software development, mathematics, and data science. I'm currently serving on the Board of Directors for the Engineering Students Society, where I contribute to student engagement and academic initiatives. This portfolio serves as a space to document my academic journey and ongoing growth as a developer and designer. Some of the courses I've completed include Introduction to Computing I and II (ITI1120, ITI1121), Data Structures and Algorithms (CSI2110), Computer Architecture I (CEG2136), Digital Systems (ITI1100), Operating Systems (CSI3131), Introduction to Software Engineering (SEG2105), and Analysis and Design of User Interfaces (SEG3125). I have experience working with a variety of programming languages and tools, including Java, C++, Python, JavaScript, HTML, CSS, and the Bootstrap framework."
          image="/assets/images/university.jpg"
        />

        <div className="bottom-negative-space"></div>

        <CardText
          align="Right"
          title="How I work"
          text="While I'm still developing my experience in UI/UX design, I'm currently enrolled in a UI design course where I'm learning the core principles of user-centered design, usability heuristics, and interface prototyping. My approach is informed by previous software engineering courses, co-op work terms, and my understanding of system design fundamentals. I reference usability principles from the Nielsen Norman Group and aim to apply them thoughtfully in each project. I design iteratively, blending aspects of spiral and agile methodologies to balance feedback, refinement, and fast prototyping. This approach allows me to remain flexible while grounding my design decisions in user needs and technical constraints. My goal is to create accessable designs which are created for productivity."
          image="/assets/images/neilson.png"
        />

        <div className="bottom-negative-space"></div>
        <div className="container-my-5 py-5 no-caret dark-background projects-container">
          <div className="row justify-content-center">
            <div className="col-sm-12 mt-5 justify-content-center">
              <div className="px-5 white-text text-center">
                <h1 className="display-4">Design Projects</h1>
              </div>
            </div>
          </div>
          <ProjectCarousel projects={projects} />
        </div>

        <Contact></Contact>
      </div>
    </>
  );
}

export default Home;
