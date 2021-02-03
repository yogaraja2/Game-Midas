import React, { useState } from 'react'
import './styles.scss'
import { Grid } from '@material-ui/core'
import pointIcon from '../../../assets/img/pointsIcon.svg'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import { useSelector, useDispatch } from 'react-redux'

function MainDash() {
    const turnsLeft = useSelector(state => state.selectAvatar.gameLength)

    const history = useHistory()

    const goToLeaderBoard = () => {
        history.push(commonRoute.leaderboard)
    }

    const goToNextTurn = () => {
        
    }

    return (
        <Grid container className="dash-main">
            {/* <div className="title">
                <h1>Main Dashboard</h1>
            </div> */}
            <div className="header-wrap">
                <div className="cash-points-sec">
                    <div className="cash-wrap">
                        <img
                            src={require('../../../assets/img/doller 2.svg').default}
                            alt="Coin"
                            className="cash-icon"
                        />
                        <span className="cash-value">${50000}</span>
                    </div>
                    <div className="points-wrap">
                        <img src={pointIcon} alt='points' className="point-icon" />
                        <span className="points">{10000}</span>
                    </div>

                </div>
                <div className="turns-sec">
                    <div className="title-wrap">
                        <h3>Turns Left</h3>
                    </div>
                    <div className="turn-count-wrap">
                        <span className="turn-count">{turnsLeft}</span>
                    </div>
                </div>
            </div>
            {/* <div className="body-wrap">

            </div> */}
            <div className="footer-wrap">
                <div className="view-leaderboard" onClick={goToLeaderBoard}>
                    <div className="leaderboard-btn">View Leaderboard</div>
                </div>
                <div className="next-turn-wrap" onClick={goToNextTurn}>
                    <div className="nxt-turn-btn">
                        <img src={require('../../../assets/img/nexTurn.svg').default} />
                    </div>
                </div>
            </div>

        </Grid>
    )
}

export default MainDash
