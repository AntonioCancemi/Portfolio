import React, { useState } from "react";
import Slider from "react-slick";
import "./ProjectsCarousel.css";
import { Carousel, Col, Row } from "react-bootstrap";
function ProjectsCarousel() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <Row className="project d-flex justify-content-around mx-5 text-light">
      <Col className="col-description pt-5">
        <br />
        <br />
        <h2>VIGIMOD</h2>
        <p>
          <strong>Durata</strong>: 07/2023 - 08/2023{" "}
        </p>
        <div className="button-desc-container d-flex ">
          <div
            className={activeSection === 0 && "selected"}
            onClick={() => setActiveSection(0)}
          >
            Info
          </div>
          <div
            className={activeSection === 1 && "selected"}
            onClick={() => setActiveSection(1)}
          >
            Core
          </div>
          <div
            className={activeSection === 2 && "selected"}
            onClick={() => setActiveSection(2)}
          >
            Tech
          </div>
        </div>
        {activeSection === 0 && <Info />}
        {activeSection === 1 && <Core />}
        {activeSection === 2 && <Tech />}
        {/* <Core /> */}
      </Col>
      <Col className="pt-5">
        <br />
        <br />
        <iframe
          height={450}
          width={800}
          src="./Portfolio/showcase_vigimod.mp4"
        ></iframe>
      </Col>
    </Row>
  );
}

export default ProjectsCarousel;
const Tech = () => {
  return (
    <ul className="swing-in-top-fwd">
      <li>
        <span>FrontEnd</span>
        <br />
        Javascript | React | DotEnv | Bootstrap | Router-dom | Redux |
        Redux-Thunk | Axios | chart.js
      </li>
      <li>
        <span>BackEnd</span>
        <br />
        JavaEE | SpringBoot | JPA | Postgresql | Spring-security | JWT | (others
        libs for test)
      </li>
    </ul>
  );
};

const Info = () => {
  return (
    <ul className="swing-in-top-fwd">
      <li>
        VigiMod è una web-app mirata per le aziende che si occupano della
        moderazione e-commerce con annunci di venditori terzi.
      </li>
      <li>Consente la moderazione di annunci con contenuto variabile.</li>
      <li>
        In linea con il work-flow dei moderatori ho progettato un interfaccia
        intuitiva e che metta in risalto le informazioni salienti, grazie anche
        all'alto contrasto dei colori.
      </li>
      <li>
        Lato server è presente un sistema di report che permette ai dirigenti di
        visionare l'efficienza dei dipendenti, oltre ad avere un quadro completo
        del carico di annunci (per tipo, categoria, stato).
      </li>
    </ul>
  );
};
const Core = () => {
  const [activeCorePage, setActiveSection] = useState(1);
  return (
    <>
      <ul className="swing-in-top-fwd core ">
        {activeCorePage === 1 && (
          <>
            {" "}
            <li>
              <span>Auth:</span>
              <br />
              app è oscurata agli utenti non autorizzati, vi è anche la
              distinzione tra ruolo Admin e Moderatore*.
            </li>
            <li>
              <span> Ads Dashboard:</span>
              <br /> mostra in top le informazioni di un utente, nella parte
              sottostante vi sono 5 tab che rispecchiano i 4 AdStatus, l'ultima
              mostra tutti gli annunci pubblicati da quell'utente. La tab
              principale è Queue che mostra gli annunci (pending) in attesa di
              moderazione.
            </li>
          </>
        )}
        {activeCorePage === 2 && (
          <>
            <li>
              <span>Notifiche:</span>
              <br /> ogni volta che viene moderato un annuncio arriva una
              notifica che riporta ID e Status, così in caso di errore basterà
              cercare l'id dell'annuncio e modificarlo in modo facile e veloce.
            </li>
            <li>
              <span>Global Dashboard:</span>
              <br /> mostra gli HighLights dell'intera mole di dati tramite
              diagrammi (Lib. chart.js) e liste ordinate per rilevanza (es:
              carico di annunci in pending rispetto a quelli già moderati, i
              venditori più sospettati).
            </li>
          </>
        )}
        {activeCorePage === 3 && (
          <li>
            <span> Report:</span>
            <br /> Ogni azione effettuata dai moderatori viene registrata in
            modo da avere per i moderatori un quadro generale di quello che
            fanno (sezione account), per gli admin* una visuale sull'efficienza
            di ogni moderatore.
          </li>
        )}
      </ul>
      <div className="button-desc-container d-flex justify-content-center ">
        <div
          className={activeCorePage === 1 && "selected"}
          onClick={() => setActiveSection(1)}
        >
          1
        </div>
        <div
          className={activeCorePage === 2 && "selected"}
          onClick={() => setActiveSection(2)}
        >
          2
        </div>
        <div
          className={activeCorePage === 3 && "selected"}
          onClick={() => setActiveSection(3)}
        >
          3
        </div>
      </div>
    </>
  );
};
