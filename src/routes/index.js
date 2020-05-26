import Home from "../components/Home.js";
import About from "../components/About.js";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
];
