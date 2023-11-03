import { getDataPopular } from "../../services/get-data-movie-Popular-V4";
import { updateMovie } from "../reducers/movies/authMovieSlice";

export const getDataPopularAll = () => async (dispatch) => {
  return getDataPopular()
    .then((Response) => {
      const moviePopular = Response.data.results;
      console.log(moviePopular, "token movie popular");
      dispatch(updateMovie(moviePopular));
    })
    .catch((err) => {});
};
