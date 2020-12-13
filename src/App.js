import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import router from "./router";
import React from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.component}
            />
          ))}
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
