import { Col, Row } from "react-bootstrap";
import "./TopNav.css";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
const TopNav = () => {
  const location = useLocation();
  const { updateState, curriculm } = useMyContext();
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);
  const handleDownloadResume = () => {
    window.open(curriculm, "_blank");
  };
  const checkPath = (path) => {
    if (path != location.pathname) {
      updateState(500);
    }
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
        <span className="a">A</span>
        <span className="a">C</span>.dev
      </Col>
      <Col xs={10} className="justify-content-end  d-flex shorts-box ">
        <div
          className={`animated-link ${
            location.pathname == "/" ? "current-page" : ""
          }`}
        >
          <Link to={"/"} onClick={() => checkPath("/")}>
            <span>00.</span>Home<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div
          className={`animated-link ${
            location.pathname === "/about" && "current-page"
          }`}
        >
          <Link to={"/about"} onClick={() => checkPath("/about")}>
            <span>01.</span>About me<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div
          className={`animated-link + ${
            location.pathname === "/experience" && "current-page"
          }`}
        >
          <Link to={"/experience"} onClick={() => checkPath("/experience")}>
            <span>02.</span>Training<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div
          className={`animated-link + ${
            location.pathname === "/projects" && "current-page"
          }`}
        >
          <Link to={"/projects"} onClick={() => checkPath("/projects")}>
            <span>03.</span>Projects<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div
          className={`animated-link  ${
            location.pathname === "/contact" && "current-page"
          }`}
        >
          <Link to={"/contact"} onClick={() => checkPath("/contact")}>
            <span>04.</span>Contact<span class="arrow">&#8595;</span>
          </Link>
        </div>
        <div className="resume-box">
          <button
            class="resume-button p"
            onClick={() => handleDownloadResume()}
          >
            <BsDownload className="me-1 mb-2" />
            RESUME
          </button>
        </div>
      </Col>
    </Row>
  );
};
export default TopNav;
