import { commonRoute } from "./config/routes";
import Home from "./pages/Home";

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
      component: null,
    }
  },
  {
    name: "HomePage",
    props: {
      path: commonRoute.homepage,
      component: null,
    }
  },
];
