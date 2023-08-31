import { Col, Container, Row } from "react-bootstrap";
import Hero from "../components/Hero/Hero";
const HomePage = () => {
  return (
    <Row>
      <Col xs={12}>
        <Hero />
        <Row></Row>
      </Col>
    </Row>
  );
};
export default HomePage;
