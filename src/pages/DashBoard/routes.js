import { commonRoute } from '../../config/routes'
import Debt from './Debt'
import Balance from './Balance'
import CashFlow from './CashFlow'
import CashFlowEntry from './CashFlowEntry'
import Stats from './Stats'

export const dashboardRoutes = [
  {
    name: 'Cash Flow',
    props: {
      path: commonRoute.dashboard.cashFlow,
      component: CashFlowEntry,
      exact: true
    },
    redirection: {
      path: commonRoute.dashboard.default,
      exact: true,
      to: commonRoute.dashboard.cashFlow
    }
  },
  {
    name: 'Cash Flow info',
    props: {
      path: commonRoute.dashboard.cashFlowInfo,
      component: CashFlow,
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
    name: 'Debt',
    props: {
      path: commonRoute.dashboard.debt,
      component: Debt,
      exact: true
    }
  }
]
