import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { useEffect, useState } from "react";

const MyRowForMovies = (props) => {
  /*   state = {
    movies: []
  }; */

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(
      `https://www.omdbapi.com/?apikey=eb1c85de&s=${props.title.toLowerCase()}`
    )
      .then((resp) => {
        console.log("Risposta:", resp);
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta API");
        }
      })
      .then((moviesData) => {
        /*  this.setState({ movies: moviesData.Search }); */
        setMovies(moviesData.Search);
        console.log("Movies:", moviesData.Search);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  /*   componentDidMount() {
    this.fetchMovies();
  } */

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="mt-5">
        <h2>{props.title}</h2>

        <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 gx-3 gy-3 mt-2">
          {movies &&
            movies
              .slice(0, 6)
              .map((movie) => (
                <SingleMovie
                  key={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                  id={movie.imdbID}
                  year={movie.Year}
                />
              ))}
        </Row>
      </div>
    </>
  );
};

export default MyRowForMovies;
