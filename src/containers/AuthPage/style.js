import { withStyles, makeStyles } from "@material-ui/core/styles";
import background from "../../assests/background.png";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  imageNew: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "90vh",
  },
  buttonStyle: {
    textAlign: "center",
  },
});

export const AuthButton = withStyles((theme) => ({
  root: {
    borderRadius: "20px",
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);
