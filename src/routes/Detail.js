import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <h3>Title : {movie.title}</h3>
      <h3>Download Count : {movie.download_count}</h3>
      <p>{movie.summary}</p>
      <h3>Genre : {movie.genres}</h3>
    </div>
  );
}

export default Detail;
