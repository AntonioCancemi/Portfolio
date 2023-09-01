import { Col, Image, Row } from "react-bootstrap";
import "./Bio.css";
import { useEffect, useState } from "react";
const Bio = () => {
  const [animation, setAnimation] = useState(false);
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setAnimation(true);
        setTimeout(setVisibility(true), 100);
      } else {
        setAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Row
      className={`justify-content-center pt-5  ${visibility || "invisible"}`}
    >
      <Col xs={3} className="text-end">
        <Image
          src="https://cdn3.iconfinder.com/data/icons/books-outline-4/60/Biography-biographical-personal-novel-story-512.png"
          rounded
          className={` p-2 bio-image ${
            animation ? "slide-in-blurred-left" : "slide-out-blurred-left"
          }`}
        />
      </Col>
      <Col xs={5} className="bio-box text-start text-light m-0">
        <h2
          className={`d-flex align-items-center ${
            animation ? `slide-in-blurred-right` : `slide-out-blurred-right`
          }`}
        >
          BIO
        </h2>
        <br />
        <p
          className={
            animation ? `slide-in-blurred-right` : `slide-out-blurred-right`
          }
        >
          Sono Antonio Francesco Cancemi, un appassionato Sviluppatore Web
          Full-Stack con una solida formazione tecnico scientifica maturata
          durante il cammino da un liceo Scientifico fino al
          <a href="https://www.polito.it/" target="_blank">
            {" "}
            Politecnico di Torino
          </a>
          . Il mio percorso professionale è stato plasmato da sei mesi di
          immersiva formazione presso
          <a href="https://epicode.com/it/" target="_blank">
            {" "}
            EPICODE
          </a>
          , dove ho acquisito competenze che spaziano dall'<span>
            HTML5
          </span> e <span>CSS3</span> al <span>Java Enterprise</span> e{" "}
          <span>PostgreSQL</span>. <br />
        </p>
        <br />
        <p
          className={
            animation ? `slide-in-blurred-right` : `slide-out-blurred-right`
          }
        >
          Sono noto per la mia capacità di risolvere problemi, la mia
          determinazionenel fornire soluzioni su misura e la mia passione per l'
          <span>innovazione tecnologica</span>. Sono costantemente alla ricerca
          di nuove sfide nel mondo dello sviluppo web e sono motivato a
          contribuire all'<span>evoluzione digitale</span>. La mia visione è
          quella di creare soluzioni all'avanguardia che migliorino le
          esperienze utente e guidino il successo aziendale.
        </p>
        <br />
        <p
          className={
            animation ? `slide-in-blurred-right` : `slide-out-blurred-right`
          }
        >
          Sono entusiasta di condividere il mio lavoro e le mie competenze
          attraverso questo portfolio digitale. Grazie per l'opportunità di
          farlo.
        </p>
      </Col>
      <Col xs={1}></Col>
    </Row>
  );
};
export default Bio;
