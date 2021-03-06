import { commonRoute } from "./config/routes";
import Home from "./pages/Home";
import Account from "./pages/Account";
import DashBoard from './pages/DashBoard';

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
    name: "Select Role",
    props: {
      path: commonRoute.selectRole,
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
    name: "LeaderBoard",
    props: {
      path: commonRoute.leaderboard,
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
  },
  {
    name: "DashBoard",
    props: {
      path: commonRoute.dashBoard,
      component: DashBoard,
    }
  },
];
