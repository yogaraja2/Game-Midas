import { commonRoute } from "../../config/routes";
import GameControl from "./GameControl";
import SelectAvatar from "./SelectAvatar";
import SelectDreams from "./SelectDream";

export const homeRoutes = [
  {
    name: "Game Control",
    props: {
      path: commonRoute.gameOptions,
      component: GameControl,
      exact: true
    },
    redirection: {
      path: commonRoute.home,
      exact: true,
      to: commonRoute.gameOptions
    }
  },
  {
    name: "Select Avatar",
    props: {
      path: commonRoute.selectAvatar,
      component: SelectAvatar,
      exact: true
    },
    redirection: {
      path: commonRoute.home,
      exact: true,
      to: commonRoute.selectAvatar
    }
  },
  {
    name: "Select Dream",
    props: {
      path: commonRoute.selectDreams,
      component: SelectDreams,
      exact: true
    },
    redirection: {
      path: commonRoute.home,
      exact: true,
      to: commonRoute.selectDreams
    }
  },
];
