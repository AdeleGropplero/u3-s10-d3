import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";
import MyFilmGallery from "./components/MyFilmGallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

/* import AreaPersonale from "./components/AreaPersonale"; */

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <MyNavBar />

          {/* <AreaPersonale /> SCOMMENTARE QUESTA PARTE E L'IMPORT PER VEDERE LA SEZIONE AREA PERSONALE*/}

          <MyTvShowsSection />
          <Routes>
            <Route path="/saghe" element={<MyFilmGallery />} />
            <Route path="/details/:MovieId" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>

        <MyFooter />
      </Container>
    </>
  );
}

export default App;
