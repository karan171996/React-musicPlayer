import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export function MainWindow() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "80vh" }}
        />
      </Container>
    </>
  );
}
