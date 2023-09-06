import { Col, Row } from "react-bootstrap";
import "./Hero.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
const Hero = () => {
  const [linguage, setLinguage] = useState(true);
  const { updateState } = useMyContext();

  const text = [
    "I'm a technology enthusiast who translates passion into code. From Politecnico di Torino to the Fullstack Web Developer journey at EPICODE, I've shaped projects and apps like VigiMod. I'm a proactive problem solver, ready for fresh challenges in the realm of web development. Get in touch To bring your ideas to life.",
    "Sono un'appassionato di tecnologia che trasforma la passione in codice. Dal Politecnico di Torino al percorso di Fullstack Web Developer presso EPICODE, ho plasmato progetti e app come VigiMod. Sono un risolutore proattivo pronto per nuove sfide nel mondo dello sviluppo web. Contattami per dare vita alle tue idee.",
  ];
  return (
    <Row className="hero-row mx-5 px-5">
      <Col lg={2} className="d-xs-none"></Col>
      <Col>
        <section id="hero" className="box-content-align">
          <div class="hero container d-flex flex-column align-content-center ">
            <h1>
              Welcome! <span></span>
            </h1>
            <h1>
              I'm <span></span>
            </h1>
            <h1>
              Antonio Cancemi <span></span>
            </h1>
            <h1>
              Junior Web Developer <span></span>
            </h1>
            <div className="d-flex explore text-focus-in-slow align-items-center">
              <Link
                to={"/about"}
                className="cta "
                onClick={() => updateState(500)}
              >
                EXPLORE
              </Link>
              <p className=" text-center">My Portfolio</p>
            </div>
          </div>
        </section>
      </Col>
      <Col className="d-flex">
        <section className=" introduction-container align-self-center box-content-align border-top border-start  rounded">
          {/* img box */}
          <div className="d-flex justify-content p-3">
            <img
              className="rounded-circle  profile-img"
              src="https://join.epicode.com/wp-content/uploads/avatars/3099/foto_lavoro1-bpfull.jpg"
              alt="fotoProfilo"
              width={300}
            />
          </div>
          {/* text & button box */}
          <div className="ps-3">
            <div className="button-box ">
              <button
                className={linguage && "selected "}
                onClick={() => setLinguage(true)}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/great-britain-circular.png"
                  alt="great-britain-circular"
                />
                EN
              </button>
              <button
                className={!linguage && "selected"}
                onClick={() => setLinguage(false)}
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/fluency/48/italy-circular.png"
                  alt="italy-circular"
                />
                IT
              </button>
            </div>
            <h2 className="text-focus-in">
              {linguage ? "Introduction" : "Introduzione"}
            </h2>
            <p className="text-focus-in">{linguage ? text[0] : text[1]}</p>
          </div>
        </section>
      </Col>
      <Col lg={2} className="d-xs-none"></Col>
    </Row>
  );
};
export default Hero;
