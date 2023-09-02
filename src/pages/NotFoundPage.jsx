import { Col, Row } from "react-bootstrap";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/ContextProvider";

const NotFoundPage = () => {
  const { updateState } = useMyContext();
  return (
    <Row class="container justify-content-center">
      <Col className="text-center">
        <div class="section">
          <h1 class="error">404</h1>
          <div class="page">
            Ooops!!! The page you are looking for is not found {");"}
          </div>
          <Link
            to={"/"}
            class="back-home rounded"
            onClick={() => updateState()}
          >
            Back to home
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default NotFoundPage;
