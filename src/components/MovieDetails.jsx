import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieObj, setMovieObj] = useState([]);
  const params = useParams();

  const fetchMovieDetails = () => {
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
      .then((movieObjs) => {
        setMovieObj(movieObj);
      });
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
export default MovieDetails;
