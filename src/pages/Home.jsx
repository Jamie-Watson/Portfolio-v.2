import "../assets/css/main.css";
import Navbar from "../components/Navbar";
import CardText from "../components/CardText";
function Home() {
  return (
    <>
      <div className="grid-background">
        <Navbar />

        <div
          id="home"
          className="container-my-5 py-5 no-caret light-background"
        >
          <div className="row py-5 justify-content-center">
            <div className="col-sm-6 justify-content-center pt-5">
              <div className="text-center">
                <img
                  src="/assets/images/snoopy-computer.jpg"
                  className="img-fluid rounded-circle"
                  alt="Snoopy at computer"
                />
              </div>
            </div>

            <div className="col-sm-6 justify-content-center px-5 pt-5">
              <div className="p-5 align-content-center rounded jumbotron h-100 w-100">
                <h1 className="display-1 manrope cycle-text">
                  Hi, I'm a software engineer!
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section className="curved-bottom mb-5"></section>
        <div className="bottom-negative-space"></div>

        <CardText
          align="left"
          title="About Me"
          text="I'm a second-year software engineering student at the
                University of Ottawa, passionate about software
                engineering, mathematics, and data science. I've created
                this website to document my journey, including both
                academic and personal projects. Here, you'll find
                insights into my coursework and projects, as well as
                reflections on my learning experiences. Some of the
                relevant courses I've completed include Introduction to
                Computing I and II (ITI1120 and ITI1121), Professional
                Communication and Responsibility (SEG 2900), Digital
                Systems (ITI1100), Data Structures and Algorithms
                (CSI2110), and Computer Architecture I (CEG2136). I'm
                proficient in several programming languages and
                frameworks, including Java, C++, Python, JavaScript,
                HTML, CSS, and the Bootstrap framework. I love diving
                into complex problems and exploring new ideas—so much so
                that you can often catch me gushing over a new proof
                technique to my friends. This space is a living record
                of my growth and exploration in the field, and I'm
                excited to share my progress with you. :)"
          image="/assets/images/university.jpg"
        />

        <div className="bottom-negative-space"></div>

        <CardText
          align="Right"
          title="How I work"
          text="I'm a second-year software engineering student at the
                University of Ottawa, passionate about software
                engineering, mathematics, and data science. I've created
                this website to document my journey, including both
                academic and personal projects. Here, you'll find
                insights into my coursework and projects, as well as
                reflections on my learning experiences. Some of the
                relevant courses I've completed include Introduction to
                Computing I and II (ITI1120 and ITI1121), Professional
                Communication and Responsibility (SEG 2900), Digital
                Systems (ITI1100), Data Structures and Algorithms
                (CSI2110), and Computer Architecture I (CEG2136). I'm
                proficient in several programming languages and
                frameworks, including Java, C++, Python, JavaScript,
                HTML, CSS, and the Bootstrap framework. I love diving
                into complex problems and exploring new ideas—so much so
                that you can often catch me gushing over a new proof
                technique to my friends. This space is a living record
                of my growth and exploration in the field, and I'm
                excited to share my progress with you. :)"
          image="/assets/images/university.jpg"
        />

        {/* <div class="row-mx-5 justify-content-center">
          <div class="col-sm-12 px-5">
            <div class="card w-100 medium-gray">
              <div class="row">
                <div class="col-sm-8">
                  <div
                    class="card"
                    //style={"background-color: #fcfcfc; height: 100%"}
                  >
                    <h1
                      class="card-title text-center pt-3 manrope"
                      //style="color: #7c7c7c;"
                    >
                      About Me
                    </h1>
                    <div class="card-body align-items-center justify-content-center d-flex">
                      <p
                        class="card-text manrope" //style="color: #7c7c7c;"
                      >
                        I'm a second-year software engineering student at the
                        University of Ottawa, passionate about software
                        engineering, mathematics, and data science. I've created
                        this website to document my journey, including both
                        academic and personal projects. Here, you'll find
                        insights into my coursework and projects, as well as
                        reflections on my learning experiences. Some of the
                        relevant courses I've completed include Introduction to
                        Computing I and II (ITI1120 and ITI1121), Professional
                        Communication and Responsibility (SEG 2900), Digital
                        Systems (ITI1100), Data Structures and Algorithms
                        (CSI2110), and Computer Architecture I (CEG2136). I'm
                        proficient in several programming languages and
                        frameworks, including Java, C++, Python, JavaScript,
                        HTML, CSS, and the Bootstrap framework. I love diving
                        into complex problems and exploring new ideas—so much so
                        that you can often catch me gushing over a new proof
                        technique to my friends. This space is a living record
                        of my growth and exploration in the field, and I'm
                        excited to share my progress with you. :)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 align-content-center justify-content-center">
                  <img
                    class="img-fluid p-3"
                    //style="border-radius: 50%; border-color: black;"
                    src="/assets/images/univeristy.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/* <div
        id="about"
        class="container-my-5 py-5 justify-content-center light-background"
      >
        <div class="row-mx-5 justify-content-center">
          <div class="col-sm-12 px-5">
            <div class="card w-100 medium-gray">
              <div class="row">
                <div class="col-sm-8">
                  <div
                    class="card"
                    //style={"background-color: #fcfcfc; height: 100%"}
                  >
                    <h1
                      class="card-title text-center pt-3 manrope"
                      //style="color: #7c7c7c;"
                    >
                      About Me
                    </h1>
                    <div class="card-body align-items-center justify-content-center d-flex">
                      <p
                        class="card-text manrope" //style="color: #7c7c7c;"
                      >
                        I'm a second-year software engineering student at the
                        University of Ottawa, passionate about software
                        engineering, mathematics, and data science. I've created
                        this website to document my journey, including both
                        academic and personal projects. Here, you'll find
                        insights into my coursework and projects, as well as
                        reflections on my learning experiences. Some of the
                        relevant courses I've completed include Introduction to
                        Computing I and II (ITI1120 and ITI1121), Professional
                        Communication and Responsibility (SEG 2900), Digital
                        Systems (ITI1100), Data Structures and Algorithms
                        (CSI2110), and Computer Architecture I (CEG2136). I'm
                        proficient in several programming languages and
                        frameworks, including Java, C++, Python, JavaScript,
                        HTML, CSS, and the Bootstrap framework. I love diving
                        into complex problems and exploring new ideas—so much so
                        that you can often catch me gushing over a new proof
                        technique to my friends. This space is a living record
                        of my growth and exploration in the field, and I'm
                        excited to share my progress with you. :)
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 align-content-center justify-content-center">
                  <img
                    class="img-fluid p-3"
                    //style="border-radius: 50%; border-color: black;"
                    src="/assets/images/univeristy.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/*
            


               
                
            
            <div class="roundedGridWrapper my-5 mx-3">
                    <div class="container-my-5" style="caret-color: transparent;">
                        <div class="row justify-content-center">
                    
                            <div class="col-sm-12 mt-5 justify-content-center">
                                <div class="px-5 text-black manrope rounded h-100 w-100 text-center" style="color: #7c7c7c;">
                                    <h1 class="display-5" style="color: #7c7c7c;">What I'm Working On</h1>
                                    <p style="color: #7c7c7c;">Personal and School Projects</p>
                                </div>
                            </div>
                    
                        </div>
                        
                        <div class="row">
                            <div id="carouselExampleControls" class="carousel carousel-dark py-5" data-ride="carousel">
                                
                                    
                                <div class="carousel-inner px-5">
                                    <div class="carousel-item active">
                                        <div class="card card-style" style="margin: 0.5em;">
                                            <img src="Images/Lidar.png" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 class="card-title">Data Clustering using LiDAR</h5>
                                            <ul class="list-inline card-text">
                                                <li class="list-inline-item label-outline"><span>Java Based</span></li>
                                                <li class="list-inline-item label-outline"><span>School Project</span></li>
                                            </ul>
                                            <a href="projects/lidarCluster.html" class="btn btn-outline-dark">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card" style="margin: 0.5em;">
                                            <img src="Images/parkingLot.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 class="card-title">Parking Lot Simulator</h5>
                                            <ul class="list-inline card-text">
                                                <li class="list-inline-item label-outline"><span>Java Based</span></li>
                                                <li class="list-inline-item label-outline"><span>School Project</span></li>
                                            </ul>
                                            <a href="projects/parkingSim.html" class="btn btn-outline-dark">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card" style="margin: 0.5em;">
                                            <img src="Images/cards.webp" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 class="card-title">Old Maid Card Game</h5>
                                            <ul class="list-inline card-text">
                                                <li class="list-inline-item label-outline"><span>Python Based</span></li>
                                                <li class="list-inline-item label-outline"><span>School Project</span></li>
                                                <li class="list-inline-item label-outline"><span>Game</span></li>
                                            </ul>
                                            <a href="projects/oldMaid.html" class="btn btn-outline-dark">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card" style="margin: 0.5em;">
                                            <img src="Images/nonogram.png" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 class="card-title">Nonogram Generator Python Class</h5>
                                            <ul class="list-inline card-text">
                                                <li class="list-inline-item label-outline"><span>Python Based</span></li>
                                                <li class="list-inline-item label-outline"><span>Personal Project</span></li>
                                            </ul>
                                            <a href="projects/nonogram.html" class="btn btn-outline-dark">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="card" style="margin: 0.5em;">
                                            <img src="Images/typing.jpg" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 class="card-title">Writing Aid: Penpal</h5>
                                            <ul class="list-inline card-text">
                                                <li class="list-inline-item label-outline"><span>Java Based</span></li>
                                                <li class="list-inline-item label-outline"><span>Personal Project</span></li>
                                            </ul>
                                            <a href="projects/penPal.html" class="btn btn-outline-dark">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev custom-carousel" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                </a>
                                <a class="carousel-control-next custom-carousel" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
                

                <div id="contact" class="container-mt-5 pb-5 medium-gray justify-content-center" style="caret-color: transparent;">
                    <div class="row-mt-5">
                        <div class="col-sm-12 justify-content-center">
                            <div class="py-5 text-dark text-center manrope">
                                <h1 class="display-5 ">Contact me :)</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-sm-4">
                            <div class="text-secondary text-center manrope">
                                <p class="mb-5">
                                    I'd love to connect! Feel free to reach out if you have any 
                                    questions or just want to chat about coding and math.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <section class="mb-4 text-center">
                            
                            <a class="btn btn-outline-dark btn-floating m-1 justify-content-around" href="https://www.linkedin.com/in/jamie-w-268486298/" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>

                    
                    
                            <a href="https://github.com/Jamie-Watson" class="btn btn-outline-dark btn-floating m-1" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                    
                        
                            <button onclick="emailCopy()" class="btn btn-outline-dark btn-floating m-1" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </button>
                            
                        </section>
                    </div>
                </div>
                 */}
      </div>
    </>
  );
}

export default Home;
