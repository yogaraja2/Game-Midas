import { commonRoute } from "./config/routes";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const mainRoute = [
  {
    name: "Home",
    props: {
      path: commonRoute.home,
      component: Home,
      exact: true
    }
  },
  {
    name: "Login",
    props: {
      path: commonRoute.login,
      component: Login,
    }
  },
];
