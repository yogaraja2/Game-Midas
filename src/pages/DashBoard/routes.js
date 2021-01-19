import { commonRoute } from '../../config/routes'
import Advisor from './Advisor'
import Balance from './Balance'
import CashFlow from './CashFlow'
import CashFlowInfo from './CashFlowInfo'
import Stats from './Stats'

export const dashboardRoutes = [
  {
    name: 'Cash Flow',
    props: {
      path: commonRoute.dashboard.cashFlow,
      component: CashFlow,
      exact: true
    },
    redirection: {
      path: commonRoute.dashboard.default,
      exact: true,
      to: commonRoute.dashboard.cashFlow
    }
  },
  {
    name: 'Cash Flow',
    props: {
      path: commonRoute.dashboard.cashFlowInfo,
      component: CashFlowInfo,
      exact: true
    }
  },
  {
    name: 'Balance',
    props: {
      path: commonRoute.dashboard.balance,
      component: Balance,
      exact: true
    }
  },
  {
    name: 'Stats',
    props: {
      path: commonRoute.dashboard.stats,
      component: Stats,
      exact: true
    }
  },
  {
    name: 'Advisor',
    props: {
      path: commonRoute.dashboard.advisor,
      component: Advisor,
      exact: true
    }
  }
]
