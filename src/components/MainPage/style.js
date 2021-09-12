import { makeStyles } from "@material-ui/core/styles";
import background from "../../assests/background.png";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  imageNew: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "90vh",
    width: "100%",
  },
  buttonStyle: {
    textAlign: "center",
    backgroundColor: green[500],
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
});
