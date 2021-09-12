import React, { useState, useEffect } from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { useStyles } from "./style";

import { useAuthorisiationCall } from "../../hooks/useAuthorization";
import useToken from "../../hooks/Authroziation/tokenCall";
import { useLocation, useHistory } from "react-router-dom";
import QueryString from "query-string";
import { get } from "lodash";

export default function AuthencationPage() {
  const location = useLocation();
  const history = useHistory();
  console.log(
    "🚀 ~ file: index.jsx ~ line 12 ~ AuthencationPage ~ location",
    location
  );
  const classes = useStyles();
  const [code, setCode] = useState("");
  const [url, setUrl] = useState("");
  const tokenData = useToken(code);
  const verifiedUrl = useAuthorisiationCall();

  console.log(
    "🚀 ~ file: index.jsx ~ line 20 ~ AuthencationPage ~ tokenData",
    tokenData
  );

  useEffect(() => {
    setUrl(verifiedUrl);
  }, [verifiedUrl]);

  useEffect(() => {
    const parsed = get(QueryString.parse(location.search), "code", "");
    if (parsed) {
      setCode(parsed);
    }
  }, [location, code]);
  const onAuthorise = () => {
    window.location = url;
  };
  return (
    <Container className={classes.container} fixed>
      <Typography className={classes.imageNew} component="div" />
      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={onAuthorise}
      >
        Authenticate Spotify{" "}
      </Button>
    </Container>
  );
}
