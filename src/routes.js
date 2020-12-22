import { commonRoute } from "./config/routes";
import Home from "./pages/Home";
import Account from "./pages/Account";

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
      path: commonRoute.account,
      component: Account,
    }
  },
];
