import { commonRoute } from '../../config/routes'
import Advisor from './Advisor'
import Balance from './Balance'
import CashFlow from './CashFlow'
import Stats from './Stats'

export const dashboardRoutes = [
    {
        name: "Cash Flow",
        props: {
            path: commonRoute.cashFlow,
            component: CashFlow,
            exact: true
        },
        redirection: {
            path: commonRoute.dashBoard,
            exact: true,
            to: commonRoute.cashFlow
        }
    },
    {
        name: "Balance",
        props: {
            path: commonRoute.balance,
            component: Balance,
            exact: true
        },
        redirection: {
            path: commonRoute.dashBoard,
            exact: true,
            to: commonRoute.balance
        }
    },
    {
        name: "Stats",
        props: {
            path: commonRoute.stats,
            component: Stats,
            exact: true
        },
        redirection: {
            path: commonRoute.dashBoard,
            exact: true,
            to: commonRoute.stats
        }
    },
    {
        name: "Advisor",
        props: {
            path: commonRoute.advisor,
            component: Advisor,
            exact: true
        },
        redirection: {
            path: commonRoute.dashBoard,
            exact: true,
            to: commonRoute.advisor
        }
    },
]