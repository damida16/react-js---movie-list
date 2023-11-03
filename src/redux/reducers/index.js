import { combineReducers } from "@reduxjs/toolkit";
import authLogin from "./auth/authLogin";
import movieslice from "./movies/authMovieSlice";
import authRetingSlice from "./rating/authRatingSlice";

// combine reducer adalah tempat dimana kita men setup
// apa saja reducer yang kita gunakan dalam aplikasi
export default combineReducers({
  auth: authLogin,
  movie: movieslice,
  rating: authRetingSlice,
});
