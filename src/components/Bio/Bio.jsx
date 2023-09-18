import { Col, Image, Row } from "react-bootstrap";
import "./Bio.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
const Bio = () => {
  const { updateState } = useMyContext();
  const [animation, setAnimation] = useState(false);
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Regola il valore a cui attivare l'animazione in base alla larghezza della finestra
      const scrollThreshold = window.innerWidth > 768 ? 1500 : 1650;

      if (window.scrollY > scrollThreshold) {
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
      <Col className="d-none d-md-block col-1 text-end ">
        <Image
          src="https://img.icons8.com/external-becris-lineal-becris/64/FFFFFF/external-biography-literary-genres-becris-lineal-becris.png"
          rounded
          className={` p-2 bio-image ${
            animation ? "slide-in-blurred-left" : "slide-out-blurred-left"
          }`}
        />
      </Col>
      <Col className="col-10 col-lg-7 bio-box text-start text-light m-0">
        <h2
          className={`text-start ps-2 ${
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
          <a href="https://www.polito.it/" rel="noreferrer" target="_blank">
            {" "}
            Politecnico di Torino
          </a>
          . Il mio percorso professionale è stato plasmato da sei mesi di
          immersiva formazione presso
          <a href="https://epicode.com/it/" rel="noreferrer" target="_blank">
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
          attraverso questo portfolio digitale. Grazie!
        </p>
      </Col>
      <Col className="col-cta-bio col-10 col-lg-1  d-block d-lg-flex align-items-center text-center">
        <div
          className={
            animation ? `slide-in-blurred-right` : `slide-out-blurred-right`
          }
        >
          <Link
            to={"/experience"}
            class="cta-bio "
            onClick={() => updateState(500)}
          >
            LOAD NEXT
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default Bio;
