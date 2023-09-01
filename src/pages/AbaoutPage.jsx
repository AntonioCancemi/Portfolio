import { Col, Row } from "react-bootstrap";
import TopAboutMe from "../components/TopAboutMe/TopAboutMe";
import "./AboutPage.css";
import Bio from "../components/Bio/Bio";
const AboutPage = () => {
  return (
    <>
      <div className="section1">
        <TopAboutMe />
      </div>
      <br />
      <br />
      <br />
      <div className="section2">
        <Bio />

        <Row></Row>
      </div>
    </>
  );
};
export default AboutPage;
