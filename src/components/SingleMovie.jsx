import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  const { poster, title, year, id } = props;

  return (
    <Col className="my-2">
      <Link
        to={`/details/${id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div
          className="movieCard"
          style={{ position: "relative", width: "100%" }}
        >
          <img
            src={poster}
            className="img-fluid rounded"
            alt="Poster"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "9/16",
              objectFit: "cover"
            }}
          />

          <div className="infoFilm">
            <h4>{title}</h4>
            <p>{`Anno: ${year}`}</p>
            <p>{`Id: ${id}`}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default SingleMovie;
