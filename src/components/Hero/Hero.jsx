import { Col, Row } from "react-bootstrap";
import "./Hero.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
const Hero = () => {
  const [linguage, setLinguage] = useState(true);
  const { updateState } = useMyContext();

  const text = [
    "I'm a technology enthusiast who translates passion into code. From Politecnico di Torino to the Fullstack Web Developer journey at EPICODE, I've shaped projects and apps like VigiMod. I'm a proactive problem solver, ready for fresh challenges in the realm of web development.At the end of the FullStack Web Developer course at Epicode, I started working with LiveXenon, a software development company specialized in development of commercial products. I work on in-house products in the food & restaurant industry. Get in touch To bring your ideas to life.",
    "Sono un'appassionato di tecnologia che trasforma la passione in codice. Dal Politecnico di Torino al percorso di Fullstack Web Developer presso EPICODE, ho plasmato progetti e app come VigiMod. Sono un risolutore proattivo pronto per nuove sfide nel mondo dello sviluppo web.Alla fine del Corso FullStack Web Developer di Epicode ho iniziato a lavorare con LiveXenon, una società di sviluppo software, specializzata nello sviluppo di prodotti commerciali. Lavoro su prodotti interni in ambito food & restaurant. Contattami per dare vita alle tue idee.",
  ];
  return (
    <Row className="  justify-content-center text">
      <Col className="col-md-10 col-lg-7">
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
            </div>
          </div>
        </section>
      </Col>
    </Row>
  );
};
export default Hero;
