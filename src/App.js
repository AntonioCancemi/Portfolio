import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMyContext } from "./context/ContextProvider";
import TopNav from "./components/TopNav/TopNav";
import HomePage from "./pages/HomePage";
import Preloader from "./components/Preloader/Preloader";
import { useEffect } from "react";
import "./animationPage.css";
import { Col, Container } from "react-bootstrap";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const { loadingPage, updateState } = useMyContext();
  useEffect(() => {
    updateState();
  }, []);
  return (
    <BrowserRouter>
      {loadingPage ? (
        <div className="loader-container">
          <Preloader />
        </div>
      ) : (
        <Container fluid>
          <Col className="puff-in-center">
            <TopNav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<HomePage />} />
              <Route path="/experience" element={<HomePage />} />
              <Route path="/projects" element={<HomePage />} />
              <Route path="/contact" element={<HomePage />} /> */}
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Col>
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
