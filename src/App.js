import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMyContext } from "./context/ContextProvider";
import TopNav from "./components/TopNav/TopNav";
import HomePage from "./pages/HomePage";
import Preloader from "./components/Preloader/Preloader";
import { useEffect } from "react";
import "./animationPage.css";
import { Container } from "react-bootstrap";
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
        <Container fluid className="puff-in-center">
          <TopNav />
          <Routes location={"/home"}>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
