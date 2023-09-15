import { Col, Row } from "react-bootstrap";
import "./TopAboutMe.css";
import { useState } from "react";

const TopAboutMe = () => {
  const [linguage, setLinguage] = useState(true);

  const text = [
    "I'm a technology enthusiast who translates passion into code. From Politecnico di Torino to the Fullstack Web Developer journey at EPICODE, I've shaped projects and apps like VigiMod. I'm a proactive problem solver, ready for fresh challenges in the realm of web development.At the end of the FullStack Web Developer course at Epicode, I started working with LiveXenon, a software development company specialized in development of commercial products. I work on in-house products in the food & restaurant industry. Get in touch To bring your ideas to life.",
    "Sono un'appassionato di tecnologia che trasforma la passione in codice. Dal Politecnico di Torino al percorso di Fullstack Web Developer presso EPICODE, ho plasmato progetti e app come VigiMod. Sono un risolutore proattivo pronto per nuove sfide nel mondo dello sviluppo web.Alla fine del Corso FullStack Web Developer di Epicode ho iniziato a lavorare con LiveXenon, una società di sviluppo software, specializzata nello sviluppo di prodotti commerciali. Lavoro su prodotti interni in ambito food & restaurant. Contattami per dare vita alle tue idee.",
  ];
  return (
    <>
      <Row className="justify-content-center">
        {" "}
        <Col className="d-flex col-md-10 col-lg-7">
          <section className="d-md-block introduction-container align-self-center box-content-align border-top border-start  rounded">
            {/* img box */}
            <div className=" p-3">
              <img
                className="rounded-circle  profile-img"
                src="https://join.epicode.com/wp-content/uploads/avatars/3099/foto_lavoro1-bpfull.jpg"
                alt="fotoProfilo"
                width={250}
              />
            </div>
            {/* text & button box */}
            <div className="ps-3">
              <div className="button-box ">
                <button
                  className={linguage ? "selected " : undefined}
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
                  className={linguage ? undefined : "selected"}
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
      </Row>
      <Row className="justify-content-center text-light top-about-container pt-5 align-content-center">
        <Col className="col-sm-10 col-lg-3 text-center text-box text-focus-in ">
          <h3>
            Full-Stack <br />
            Web Developer
          </h3>
          <ul>
            <li>Applicazioni Web All'avanguardia</li>
            <li>
              Interfacce Utente <strong> Intuitive e Coinvolgenti</strong>
            </li>
            <li>Soluzioni su Misura per Prestazioni Ottimali</li>
          </ul>
        </Col>
        <Col className="col-sm-10 col-lg-3 text-center text-box text-focus-in">
          <h3>Problem Solver</h3>
          <ul>
            <li>
              <strong>Analisi Critica</strong> per Soluzioni Personalizzate
            </li>
            <li>Sfide Complesse Affrontate con Successo</li>
            <li>Nessuna paura dei Bug</li>
          </ul>
        </Col>
        <Col className="col-sm-10 col-lg-3 text-center text-box text-focus-in">
          <h3>
            Dinamismo <br /> Innovazione
          </h3>
          <ul>
            <li>Adattamento Rapido a qualsiasi ambiente</li>
            <li>Ricerca Costante di Nuove Tecnologie</li>
            <li>Visione Innovativa e lungimirante</li>
          </ul>
        </Col>
        <Col xs={12} className="text-center">
          <div className="scroll-down-arrow">⮟</div>
        </Col>
      </Row>
    </>
  );
};
export default TopAboutMe;
