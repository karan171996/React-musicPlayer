import React from "react";

const DashBoard = React.lazy(() => import("./containers/DashBoard/index"));
const AuthPage = React.lazy(() => import("./containers/AuthPage/index"));

const router = [
  {
    label: "Auth Page",
    path: "/",
    exact: true,
    component: () => <AuthPage />,
  },
  {
    label: "DashBoard",
    path: "/dashboard",
    exact: true,
    component: () => <DashBoard />,
  },
];
export default router;
