import { Col, Row } from "react-bootstrap";
import "./ExperiencePage.css";
import { useEffect, useState } from "react";
import Skills from "../components/Skills/Skills";
import { MdWork } from "react-icons/md";
import { BsFillKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/ContextProvider";

const ExperiencePage = () => {
  const { updateState } = useMyContext();
  const [animation, setAnimation] = useState(false);
  const [animation2, setAnimation2] = useState(false);
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth > 768 ? 500 : 650;
      const scrollThreshold2 = window.innerWidth > 768 ? 1350 : 2000;
      if (window.scrollY > scrollThreshold) {
        setAnimation(true);
        setTimeout(setVisibility(true), 100);
      } else {
        setAnimation(false);
      }
      if (window.scrollY > scrollThreshold2) {
        setAnimation2(true);
      } else {
        setAnimation2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="section1">
        <div className="experience-page-conatiner  ">
          <Skills />
        </div>
        <Row className="text-center ">
          <Col className="scroll-down-arrow ">⮟</Col>
        </Row>
      </div>
      <br />
      <br />
      <div className="section2">
        <div className="experience-page-conatiner">
          <Row
            className={`experience-row justify-content-center   ${
              visibility || "invisible"
            }`}
          >
            <Col
              className={`col-11 col-lg-12 ${
                animation ? "slide-in-blurred-left" : "slide-out-blurred-left"
              }`}
            >
              <Row className=" text-start ">
                <Col>
                  <span className="h2">TRAINING</span>
                </Col>
              </Row>

              <br />
              <br />
              <h3 className="mt-md-4 mt-lg-4">
                EPICODE - Full-Stack Web Developer
              </h3>
              <p>
                <strong>Durata:</strong> Febbraio 2023 - Luglio 2023
              </p>
              <p>
                <strong>Type:</strong> Sei mesi di formazione intensiva nel
                campo dello sviluppo web, con un focus su competenze chiave.
              </p>
            </Col>
            <Row className="justify-content-center justify-content-lg-start">
              <Col
                className={`col-11  col-md-10 col-lg-6 me-lg-3 ${
                  animation ? "slide-in-blurred-left" : "slide-out-blurred-left"
                }`}
              >
                <h4 className="d-flex">
                  <MdWork className="me-1" />
                  Competenze Acquisite:
                </h4>
                <ul className="ps-0 ps-lg-4">
                  <li>
                    <span>Front-End: </span>
                    <br /> Dalla costruzione di pagine HTML5 e CSS3 all'utilizzo
                    di framework moderni come React con TypeScript.
                  </li>
                  <li>
                    <span>Back-End:</span> <br /> Approfondimento delle
                    competenze in Java Enterprise e SpringBoot, con integrazione
                    di database PostgreSQL.
                  </li>
                  <li>
                    <span>Progettazione UX/UI:</span> <br /> Creazione di
                    interfacce utente intuitive e coinvolgenti con un occhio
                    attento al design.
                  </li>
                  <li>
                    <span> Risoluzione dei Problemi:</span> <br /> Sviluppo di
                    abilità nella risoluzione rapida ed efficiente di sfide
                    tecniche complesse.
                  </li>
                  <li>
                    <span>Lavoro in Team:</span> <br /> Collaborazione con
                    colleghi su progetti reali, affinando le capacità di
                    comunicazione e di gestione dei progetti.
                  </li>
                </ul>
              </Col>
              <Col
                className={`col-11  col-md-10 col-lg-5 d-flex justify-content-between flex-column ${
                  animation
                    ? "slide-in-blurred-right"
                    : "slide-out-blurred-right"
                }`}
              >
                {" "}
                <div className="text-center pt-4 "></div>
                <div>
                  <h4 className="d-flex">
                    <BsFillKeyFill className="me-1" />
                    Risultati Chiave:
                  </h4>
                  <ul className="ps-0 ps-lg-4">
                    <li>
                      Creazione di progetti web completi, da applicazioni
                      front-end reattive a sistemi back-end scalabili.
                    </li>
                    <li>
                      Partecipazione a sfide e competizioni di sviluppo per
                      mettere alla prova le competenze acquisite.
                    </li>
                    <li>
                      Fornitura di soluzioni web innovative, contribuendo
                      all'eccellenza nel settore.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Row>

          <br />
          <Row className="text-center">
            <Col className="scroll-down-arrow ">⮟</Col>
          </Row>
          <br />
          <Row
            className={`experience-row text-light justify-content-center  ${
              visibility || "invisible"
            }`}
          >
            <Col
              className={`col-11 col-lg-12 ${
                animation2 ? "slide-in-blurred-left" : "slide-out-blurred-left"
              }`}
            >
              <h3 className="mt-md-4 mt-lg-4">
                POLITECNICO di Torino - Ingegneria Energetica
              </h3>
              <p>
                <strong>Durata:</strong> Sette 2023 - Luglio 2023
              </p>
              <p>
                <strong>Type:</strong> Studi interrotti dopo un anno e mezzo di
                frequenza
              </p>
            </Col>
            <Row className="justify-content-center justify-content-lg-start">
              <Col
                className={`col-11  col-md-10 col-lg-6 ${
                  animation2
                    ? "slide-in-blurred-left"
                    : "slide-out-blurred-left"
                }`}
              >
                <h4 className="d-flex">
                  <MdWork className="me-1" />
                  Attività e Competenze Acquisite
                </h4>
                <ul className="ps-0 ps-lg-4">
                  <li>
                    <span>Materie: </span>
                    <br />
                    Fisica 1, Analisi Matematica 1, Algebra e, Termodinamica.
                  </li>
                  <li>
                    <span>Materie IT:</span> <br />
                    Informatica di Base, Fondamenti di Informatica e
                    Programmazione in Python, Geometria Lineare (MatLab).
                  </li>
                  <li>
                    <span>Laboratori:</span> <br /> Realizzazione di esperimenti
                    ambito fisico,matematico e informatico.
                  </li>
                </ul>
              </Col>
              <Col
                className={` col-11 col-md-10 col-lg-5 d-flex justify-content-between flex-column ${
                  animation2
                    ? "slide-in-blurred-right"
                    : "slide-out-blurred-right"
                }`}
              >
                {" "}
                <div>
                  <h4 className="d-flex">
                    <BsFillKeyFill className="me-1" />
                    Risultati Chiave
                  </h4>
                  <ul className="ps-0 ps-lg-4">
                    <li>
                      <span>Base Tecnica Solida:</span>
                      <br /> La breve formazione al Politecnico mi ha fornito
                      una solida base tecnica, che ho successivamente applicato
                      con successo nel mondo dello sviluppo web. Le conoscenze
                      acquisite in materie scientifiche e informatiche sono i
                      pilastri su cui sto costruendo la mia carriera.
                    </li>
                    <li>
                      <span>Mentalità di Apprendimento Continuo:</span>
                      <br /> L'esperienza al Politecnico ha alimentato la mia
                      mentalità di apprendimento continuo. Ho imparato quanto
                      sia importante rimanere aggiornato e aperto alle nuove
                      tecnologie e tendenze nel settore.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-center mt-5">
            <Link
              to={"/projects"}
              onClick={() => updateState(500)}
              className="cta"
            >
              LOAD NEXT
            </Link>
          </Row>
        </div>
      </div>
    </>
  );
};
export default ExperiencePage;
