import { CssBaseline, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'
import LinkButton from '../../components/LinkButton'
import clsx from 'clsx'
import RouteMapper from '../../utils/Router/RouteMapper'
import { dashboardRoutes } from './routes'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../config/routes'

const Fields = ({ id, img, label, selected, setSelected }) => {
    return (
        <div className={clsx("nav-fields-wrap", { "selected": selected === id })}
            onClick={setSelected.bind(this, id)}
        >
            <div className="nav-fields">
                <img src={require(`../../assets/img/${img}.svg`).default} alt={label} />
                <h4 style={{ color: '#ffffff', fontWeight: 200 }}>{label}</h4>
            </div>
        </div>

    )
}

function DashBoard() {

    const [selected, setSelected] = useState(null)
    const otherFieldProp = { selected, setSelected }

    const history = useHistory()
    const goToLogin = () => {
        history.push(commonRoute.home)
    }

    return (
        <>
            <Grid container className="dashboard-root">
                <Grid item className="side-nav">
                    <div className="profile-wrap">
                        <img src={require('../../assets/img/User1.svg').default} className="user-profile" />
                        <h3 className="profile-text">Profile</h3>
                    </div>

                    <div className="field-main-wrap">
                        <Fields
                            img="CashflowIcon"
                            label="Cash Flow"
                            id="casfhlow"
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

                    <div className="log-out-wrap">
                        <LinkButton className="log-out-btn" onClick={goToLogin}>Sign out</LinkButton>
                    </div>

                </Grid>

                <Grid item className="dashboard-main" >
                    <div style={{ margin: '30px' }}>
                        <img src={require('../../assets/img/TitleLogo.svg').default} />
                    </div>
                    {/* <Grid container
                        justify="center"
                        alignContent="center"
                    >
                        <RouteMapper data={dashboardRoutes} />

                    </Grid> */}
                    <h1 style={{ textAlign: 'center' }}>Dashboard</h1>

                </Grid>

            </Grid>
        </>
    )
}

export default DashBoard
