import { commonRoute } from "./config/routes";
import Home from "./pages/Home";
import Account from "./pages/Account";

export const mainRoute = [
  {
    name: "Login",
    props: {
      path: commonRoute.home,
      component: Account,
      exact: true
    }
  },
  {
    name: "SignUp",
    props: {
      path: commonRoute.account,
      component: Account,
    }
  },
  {
    name: "Home",
    props: {
      path: commonRoute.gameOptions,
      component: Home,
    }
  },
  {
    name: "Avatar",
    props: {
      path: commonRoute.selectAvatar,
      component: Home,
    }
  },
  {
    name: "Dream",
    props: {
      path: commonRoute.selectDreams,
      component: Home,
    }
  }
];
