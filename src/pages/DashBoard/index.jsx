import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'
import LinkButton from '../../components/LinkButton'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../config/routes'
import CashFlow from './CashFlow'
import Balance from './Balance'
import Stats from './Stats'
import Advisor from './Advisor'
import DashHead from './DashHead'

function DashBoard() {
  const history = useHistory()

  const Fields = ({ id, img, label, selected, setSelected }) => {
    return (
      <div
        className={clsx('nav-fields-wrap', { selected: selected === id })}
        onClick={setSelected.bind(this, id)}
      >
        <div className="nav-fields">
          <img
            src={require(`../../assets/img/${img}.svg`).default}
            alt={label}
          />
          <h4 className="field-label">{label}</h4>
        </div>
      </div>
    )
  }

  const [selected, setSelected] = useState(null)
  const otherFieldProp = { selected, setSelected }

  const goToLogin = () => {
    history.push(commonRoute.home)
  }

  function renderSwitch(selected) {
    switch (selected) {
      case 'cashFlow':
        return <CashFlow />
      case 'balance':
        return <Balance />
      case 'stats':
        return <Stats />
      case 'advisor':
        return <Advisor />
      default:
        break
    }
  }

  return (
    <>
      <Grid container className="dashboard-root">
        <Grid item xs={12} md={1} sm={2} className="side-nav">
          <div className="left-partition">
            <div className="profile-wrap">
              <div className="user-profile">
                <img
                  src={require('../../assets/img/User1.svg').default}
                  alt="profile"
                  className="user-profile-img"
                />
              </div>
            </div>

            <div className="field-main-wrap">
              <Fields
                img="CashflowIcon"
                label="Cash Flow"
                id="cashFlow"
                {...otherFieldProp}
              />
              <Fields
                img="BalanceIcon"
                label="Balance"
                id="balance"
                {...otherFieldProp}
              />
              <Fields
                img="StatsIcon"
                label="STATS"
                id="stats"
                {...otherFieldProp}
              />
              <Fields
                img="AdvisorIcon"
                label="Ask Advisor"
                id="advisor"
                {...otherFieldProp}
              />
            </div>
          </div>

          <div className="right-partition">
            <div className="log-out-wrap">
              <LinkButton className="log-out-btn" onClick={goToLogin}>
                Sign out
              </LinkButton>
            </div>
          </div>
        </Grid>

        <Grid item sm={10} md={11} xs={12} className="dashboard-main-wrap">
          <Grid container className="dashboard-main">
            <Grid item xs={12} className="dash-header-wrap">
              <DashHead />
            </Grid>
            <Grid item xs={12} className="dash-pages">
              {
                renderSwitch(selected)
                // or using below ternary condition
                //  (selected === "cashFlow" ? <CashFlow /> :
                //     selected === "balance" ? <Balance /> :
                //         selected === "stats" ? <Stats /> :
                //             selected === "advisor" ? <Advisor /> : null)
              }

              {/* <RouteMapper data={dashboardRoutes} /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default DashBoard
