import React, { useState } from "react";
import { Typography, Container } from "@material-ui/core";
import { useStyles, AuthButton } from "./style";
import ModalWrapper from "../AuthPage/components/Modal";

export default function AuthencationPage() {
  const [authorize, authorizeHandler] = useState(false);
  const classes = useStyles();

  const buttonHandler = () => {
    authorizeHandler(true);
  };

  const modalClose = (val) => {
    authorizeHandler(val);
  };
  return (
    <Container fixed>
      <ModalWrapper openModalState={authorize} closeHandler={modalClose} />
      <Typography className={classes.imageNew} component="div" />
      <Typography className={classes.buttonStyle} component="div">
        <AuthButton onClick={buttonHandler} variant="contained" color="primary">
          Authenticate Spotify{" "}
        </AuthButton>
      </Typography>
    </Container>
  );
}
