import { Col, Row } from "react-bootstrap";
import "./TopNav.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const TopNav = () => {
  const [isNavbarOpaque, setIsNavbarOpaque] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsNavbarOpaque(true);
    } else {
      setIsNavbarOpaque(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Row
      className={` px-2 topnav-row justify-content-between  align-content-center fixed-top ${
        isNavbarOpaque ? "opaque" : ""
      }`}
    >
      <Col className="ms-2   col-lg-2 text-start nav-title ">
        <span className="a">A</span>
        <span className="a">C</span>.dev
      </Col>
      <ResponsiveOffcanvas />
    </Row>
  );
};
export default TopNav;

const ResponsiveOffcanvas = () => {
  const location = useLocation();
  const { updateState, curriculm } = useMyContext();
  const handleDownloadResume = () => {
    window.open(curriculm, "_blank");
  };
  const checkPath = (path) => {
    if (path !== location.pathname) {
      updateState(500);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col className="col-sm-2 col-md-2 col-lg-9 d-flex justify-content-end  py-3  ">
        <Button
          variant="trasparent"
          className="d-lg-none nav-btn "
          onClick={handleShow}
        >
          <AiOutlineMenu />
        </Button>

        <Offcanvas placement="top" show={show} responsive="lg">
          <Offcanvas.Header className="offcanvas-bg d-flex justify-content-center d-lg-none ">
            <Button
              variant="trasparent"
              className="nav-btn"
              onClick={() => handleClose()}
            >
              X
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body className="shorts-box offcanvas-bg">
            <ul className=" list-unstyled text-center text-lg-end d-block d-lg-flex mt-3 flex-lg-row ">
              <li
                className={`animated-link pb-md-2 ${
                  location.pathname === "/" ? "current-page" : ""
                }`}
              >
                <Link to={"/"} onClick={() => checkPath("/")}>
                  <span>00.</span>Home
                  <span className="arrow d-md-none d-lg-block">&#8595;</span>
                </Link>
              </li>
              <li
                className={`animated-link pb-md-2 ${
                  location.pathname === "/about" && "current-page"
                }`}
              >
                <Link to={"/about"} onClick={() => checkPath("/about")}>
                  <span>01.</span>About me
                  <span className="arrow d-md-none d-lg-block">&#8595;</span>
                </Link>
              </li>
              <li
                className={`animated-link pb-md-2  ${
                  location.pathname === "/experience" && "current-page"
                }`}
              >
                <Link
                  to={"/experience"}
                  onClick={() => checkPath("/experience")}
                >
                  <span>02.</span>Training
                  <span className="arrow d-md-none d-lg-block">&#8595;</span>
                </Link>
              </li>
              <li
                className={`animated-link pb-md-2  ${
                  location.pathname === "/projects" && "current-page"
                }`}
              >
                <Link to={"/projects"} onClick={() => checkPath("/projects")}>
                  <span>03.</span>Projects
                  <span className="arrow d-md-none d-lg-block">&#8595;</span>
                </Link>
              </li>
              <li
                className={`animated-link pb-md-2  ${
                  location.pathname === "/contact" && "current-page"
                }`}
              >
                <Link to={"/contact"} onClick={() => checkPath("/contact")}>
                  <span>04.</span>Contact
                  <span className="arrow d-md-none d-lg-block">&#8595;</span>
                </Link>
              </li>
              <li className="resume-box  ">
                <button
                  className="resume-button"
                  onClick={() => handleDownloadResume()}
                >
                  <BsDownload className="me-1 mb-2" />
                  RESUME
                </button>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </>
  );
};
