import { commonRoute } from "../../config/routes";
import Home from './Home'


export const instructorRoutes = [
    {
        name: "Instructor Home",
        props: {
            path: commonRoute.instructorLogin.instructorHome,
            component: Home,
            exact: true
        },
        redirection: {
            path: commonRoute.home,
            exact: true,
            to: commonRoute.instructorLogin.instructorHome
        }
    },
]