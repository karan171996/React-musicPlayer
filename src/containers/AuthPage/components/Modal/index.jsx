import React, { useState } from "react";
import { useStyles } from "./style";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useAuthroiseHook from "../../../../hooks/Authroziation";

export default function ModalWrapper({ openModalState, closeHandler }) {
  const token = useAuthroiseHook(
    "https://accounts.spotify.com/authorize",
    openModalState
  );
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const classes = useStyles();

  const handleClose = () => {
    closeHandler(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModalState}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalState}>
        <form>
          <div className={classes.paper}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">Client Id</InputLabel>
              <OutlinedInput
                required
                fullWidth
                id="component-outlined"
                value={clientId}
                onChange={setClientId}
                label="Client Id"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="component-outlined">
                Client Secret
              </InputLabel>
              <OutlinedInput
                required
                fullWidth
                id="component-outlined"
                value={clientSecret}
                onChange={setClientSecret}
                label="Client Secret"
              />
            </FormControl>
          </div>
        </form>
      </Fade>
    </Modal>
  );
}
