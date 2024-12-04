import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";
import MyFilmGallery from "./components/MyFilmGallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* import AreaPersonale from "./components/AreaPersonale"; */

function App() {
  return (
    <>
      <Container>
        <MyNavBar />

        {/* <AreaPersonale /> SCOMMENTARE QUESTA PARTE E L'IMPORT PER VEDERE LA SEZIONE AREA PERSONALE*/}

        <MyTvShowsSection />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MyFilmGallery />} />
          </Routes>
        </BrowserRouter>

        <MyFooter />
      </Container>
    </>
  );
}

export default App;
