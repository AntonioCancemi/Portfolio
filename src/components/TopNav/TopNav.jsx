import { Col, Row } from "react-bootstrap";
import "./TopNav.css";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <Row className="px-5 topnav-row justify-content-between  align-content-center ">
      <Col xs={2} className="text-start nav-title">
        <span className="a">A</span>nto<span className="a">C</span>an.dev
      </Col>
      <Col xs={10} className="justify-content-end  d-flex shorts-box ">
        <div className="animated-link">
          <Link to={"/about"}>
            <span>01.</span>About me<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/experience"}>
            <span>02.</span>Experience<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/projects"}>
            <span>03.</span>Projects<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/contact"}>
            <span>04.</span>Contact<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="resume-box">
          <button class="resume-button p">RESUME</button>
        </div>
      </Col>
    </Row>
  );
};
export default TopNav;
