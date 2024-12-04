import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieComments, setMovieComments] = useState([]);
  const [movieDetailObj, setMovieDetailObj] = useState(null);
  console.log(movieComments);

  const params = useParams();

  const getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + params.MovieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUwOGY2NzIyY2EwMzAwMTU0ODg0ZjUiLCJpYXQiOjE3MzMzMzI4MzksImV4cCI6MTczNDU0MjQzOX0.7oLMj3gb-qjA-dqmW-jPwUPQOr6l60H3CH8fGSsKy9w"
        }
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta API");
        }
      })
      .then((movieComments) => {
        console.log(movieComments);
        setMovieComments(movieComments);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const fetchMovies = () => {
    fetch(`https://www.omdbapi.com/?apikey=eb1c85de&i=${params.MovieId}`)
      .then((resp) => {
        console.log("Risposta:", resp);
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta API");
        }
      })
      .then((movieDetail) => {
        /*  this.setState({ movies: moviesData.Search }); */
        console.log("MOVIEDETAIL", movieDetail);
        setMovieDetailObj(movieDetail);
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
    <div className="d-flex justify-content-center text-light">
      {movieDetailObj && (
        <>
          <img src={movieDetailObj.Poster} alt="movie" />
          <div className="ms-4">
            <h3>
              {movieDetailObj.Title} - {movieDetailObj.Year} -
            </h3>
            <p>{movieDetailObj.Runtime}</p>
            <p>{movieDetailObj.Plot}</p>
            <p>
              {movieDetailObj.Genre} - <strong> Director: </strong>
              {movieDetailObj.Director}
            </p>
            <p>
              <strong> Actors: </strong>
              {movieDetailObj.Actors}
            </p>
            {movieComments && (
              <ListGroup>
                {movieComments.map((comment) => (
                  <ListGroup.Item key={comment._id}>
                    <p>
                      <strong> Rate:</strong> {comment.rate} ☆
                    </p>
                    <p>
                      <strong>Commento:</strong> {comment.comment}
                    </p>
                    <p>
                      <strong>Autore:</strong> {comment.author}
                    </p>
                    <p>
                      <strong>data:</strong>{" "}
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
