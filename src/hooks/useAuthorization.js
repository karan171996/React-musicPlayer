import { get } from "lodash";
import QueryString from "query-string";
import { AUTHORIZE_CALL_ENDPOINT } from "../endpoint/AuthSpotify";

export function useAuthorisiationCall() {
  const url = AUTHORIZE_CALL_ENDPOINT;
  const params = {
    // clientSecret: get(process.env, "REACT_APP_SPOTIFY_CLIENT_SECRET"),
    client_id: get(process.env, "REACT_APP_SPOTIFY_CLIENT_ID"),
    response_type: "token",
    redirect_uri: "http://localhost:3000/dashboard",
    state: "token",
    scope: "user-read-private",
    show_dialog: true,
  };
  const queryParams = QueryString.stringify(params);
  const urlFetch = `${url}?${queryParams}`;

  return urlFetch;
}
