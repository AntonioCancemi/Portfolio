import { Col, Row } from "react-bootstrap";
import "./TopAboutMe.css";

const TopAboutMe = () => {
  return (
    <Row className="justify-content-center text-light top-about-container pt-5 align-content-center">
      <Col xs={3} className="text-center text-box text-focus-in ">
        <h3>
          Sviluppatore <br /> Web Full-Stack
        </h3>
        <ul>
          <li>Applicazioni Web All'avanguardia</li>
          <li>
            Interfacce Utente <strong> Intuitive e Coinvolgenti</strong>
          </li>
          <li>Soluzioni su Misura per Prestazioni Ottimali</li>
        </ul>
      </Col>
      <Col xs={3} className="text-center text-box text-focus-in">
        <h3>Risolutore Nato</h3>
        <ul>
          <li>
            <strong>Analisi Critica</strong> per Soluzioni Personalizzate
          </li>
          <li>Sfide Complesse Affrontate con Successo</li>
          <li>Nessuna paura dei Bug</li>
        </ul>
      </Col>
      <Col xs={3} className="text-center text-box text-focus-in">
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
        <div className="scroll-down">scroll</div>
        <div className="scroll-down">down</div>
        <div className="scroll-down-arrow">⮟</div>
      </Col>
    </Row>
  );
};
export default TopAboutMe;
