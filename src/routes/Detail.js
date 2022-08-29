import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading2, setLoading2] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    console.log(movie);
    setLoading2(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading2 ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title}></img>
          <h3>Title : {movie.title}</h3>
          <h3>Download Count : {movie.download_count}</h3>
          <p>{movie.summary}</p>
          <h3>Genre : {movie.genres}</h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
