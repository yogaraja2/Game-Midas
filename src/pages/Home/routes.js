
import { commonRoute } from "../../config/routes";
import GameControl from "./GameControl";

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
  }
];
