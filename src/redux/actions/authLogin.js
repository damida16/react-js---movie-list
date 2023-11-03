import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLogin";
import { reduxLoginUser } from "../../services/auth/login_user";

// default setupnya redux bawan dari redux kalo kita mau pakek dispath
// ya kayak gini mangilanya
// export const LoginUserr = (input) => (dispatch) => {
//   reduxLoginUser(input)
//     .then((result) => {
//       // console.log(result, "result");
//       CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//       dispatch(setToken(result.data.data.token));
//     })
//     .catch((err) => {
//       console.log(err, "err");
//     });
// };

export const LoginUserr = (input) => async (dispatch) => {
  try {
    const result = await reduxLoginUser(input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {
    return false;
  }
};

export const LogOut = (input) => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
