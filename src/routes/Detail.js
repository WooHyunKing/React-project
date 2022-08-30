import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Point from "../components/Point";

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
        <Point
          background_image_original={movie.background_image_original}
          medium_cover_image={movie.medium_cover_image}
          url={movie.url}
          title_long={movie.title_long}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          download_count={movie.download_count}
        />
      )}
    </div>
  );
}

export default Detail;
