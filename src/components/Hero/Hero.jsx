import { Col, Row } from "react-bootstrap";
import "./Hero.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ContextProvider";
const Hero = () => {
  const { updateState } = useMyContext();

  return (
    <Row className=" justify-content-center">
      <Col className="col-11 col-lg-7 ">
        <section id="hero" className="box-content-align">
          <div class=" container d-flex flex-column align-content-center justify-content-center">
            <h1 className="">
              Welcome! <span></span>
            </h1>
            <h1>
              I'm <span></span>
            </h1>
            <h1>
              Antonio Cancemi <span></span>
            </h1>
            <h1>
              Junior Web Developer <span></span>
            </h1>
            <div className=" explore text-focus-in-slow ">
              <Link
                to={"/about"}
                className="cta "
                onClick={() => updateState(500)}
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </section>
      </Col>
    </Row>
  );
};
export default Hero;
