import { Col, Row } from "react-bootstrap";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
const TopNav = () => {
  const { updateState, curriculm } = useMyContext();
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  const handleDownloadResume = () => {
    window.open(curriculm, "_blank");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarOpaque(true);
      } else {
        setIsNavbarOpaque(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Row
      className={`px-5 topnav-row justify-content-between  align-content-center fixed-top ${
        isNavbarOpaque ? "opaque" : ""
      }`}
    >
      <Col xs={2} className="text-start nav-title">
        <span className="a">A</span>nto<span className="a">C</span>an.dev
      </Col>
      <Col xs={10} className="justify-content-end  d-flex shorts-box ">
        <div className="animated-link">
          <Link to={"/"} onClick={() => updateState(500)}>
            <span>00.</span>Home<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/about"} onClick={() => updateState(500)}>
            <span>01.</span>About me<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/experience"} onClick={() => updateState(500)}>
            <span>02.</span>Experience<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/projects"} onClick={() => updateState(500)}>
            <span>03.</span>Projects<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="animated-link">
          <Link to={"/contact"} onClick={() => updateState(500)}>
            <span>04.</span>Contact<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="resume-box">
          <button
            class="resume-button p"
            onClick={() => handleDownloadResume()}
          >
            RESUME
          </button>
        </div>
      </Col>
    </Row>
  );
};
export default TopNav;
