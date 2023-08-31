import { Col, Row } from "react-bootstrap";
import "./TopNav.css";
const TopNav = () => {
  return (
    <Row className="px-5 topnav-row justify-content-between  align-content-center ">
      <Col className="text-start nav-title">
        <span className="a">A</span>nto<span className="a">C</span>an.dev
      </Col>
      <Col className="justify-content-end  d-flex shorts-box ">
        <div className="animated-link">
          <a href="#about">
            <span>01.</span>About me<span class="arrow">&#8595;</span>
          </a>
        </div>
        <div className="animated-link">
          <a href="#experience">
            <span>02.</span>Experience<span class="arrow">&#8595;</span>
          </a>
        </div>
        <div className="animated-link">
          <a href="#projects">
            <span>03.</span>Projects<span class="arrow">&#8595;</span>
          </a>
        </div>
        <div className="animated-link">
          <a href="#contact">
            <span>04.</span>Contact<span class="arrow">&#8595;</span>
          </a>
        </div>
        <div className="resume-box">
          <button class="resume-button p">RESUME</button>
        </div>
      </Col>
    </Row>
  );
};
export default TopNav;
