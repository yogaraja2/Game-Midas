import { commonRoute } from "../../config/routes";
import Home from './Home'
import LeaderBoard from './LeaderBoard'


export const schoolAdminRoutes = [
    {
        name: "SchoolAdmin Home",
        props: {
            path: commonRoute.schoolAdminLogin.schoolAdminHome,
            component: Home,
            exact: true
        },
        redirection: {
            path: commonRoute.home,
            exact: true,
            to: commonRoute.schoolAdminLogin.schoolAdminHome
        }
    },
    {
        name: "Students LeaderBoard",
        props: {
            path: commonRoute.schoolAdminLogin.studentsLeaderboard,
            component: LeaderBoard,
            exact: true
        },
        redirection: {
            path: commonRoute.home,
            exact: true,
            to: commonRoute.schoolAdminLogin.studentsLeaderboard
        }
    },
]