import { Col, Row } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <Row className="text-light contact-row text-center  ">
      <br />
      <br />
      <br />
      <Col className=" pt-4 d-flex justify-content-center">
        <div className="contact-box">
          <h2>Contacts</h2>
          <ul className="list-unstyled d-flex flex-column ">
            <li>
              <a
                className="d-flex  fs-1"
                href="https://www.linkedin.com/in/antonio-cancemi-bb1b39272"
                target="_blank"
              >
                <FaLinkedin className="align-self-center icon" />
                Linkedin : Antonio Cancemi
              </a>
            </li>
            <li>
              <a
                className="d-flex  fs-1"
                href="https://github.com/AntonioCancemi"
                target="_blank"
              >
                <FaGithubSquare className="align-self-center icon" />
                GitHub : Antonio Cancemi
              </a>
            </li>
            <li>
              <a
                className="d-flex  fs-1"
                href=" tel:+39.377.284.6407"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare className="align-self-center icon" />
                Whatsapp : +39 377 284 6407
              </a>
            </li>
            <li>
              <a
                className="d-flex  fs-1"
                href="mailto:antoniocancemi1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail className="align-self-center icon" />
                Email : anotniocancemi1@gmail.com
              </a>
            </li>
          </ul>
          <h2>
            Thank you for visiting <br /> my website
          </h2>
        </div>
      </Col>
    </Row>
  );
};
export default ContactPage;
