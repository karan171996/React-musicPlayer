import React from "react";
import { Typography, Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
    fontSize: 12,
    fontWeight: 900,
  },
});
export default function AuthencationPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Typography variant="h2">Hello</Typography>
        </Container>
      </ThemeProvider>
    </>
  );
}
