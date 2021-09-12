import React from "react";

const DashBoard = React.lazy(() => import("./components/MusicPlayer"));
const AuthPage = React.lazy(() => import("./components/MainPage"));

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
