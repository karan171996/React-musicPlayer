import React from "react";

const Home = React.lazy(() => import("./containers/Home/index"));
const router = [
  {
    label: "Home",
    path: "/",
    exact: true,
    component: () => <Home />,
  },
];
export default router;
