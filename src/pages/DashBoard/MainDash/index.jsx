import React, { useState } from 'react'
import './styles.scss'
import { Grid } from '@material-ui/core'
import pointIcon from '../../../assets/img/pointsIcon.svg'
import { useHistory, useLocation } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import { useSelector, useDispatch } from 'react-redux'
import { setNewGame } from '../../../redux/Action'
import { API } from '../../../config/apis'
import Fetch from '../../../Api'
import { setCurrentTurn } from '../../../redux/Action'

function MainDash() {

    const gameLength = useSelector(state => state.selectAvatar.gameLength)
    const currentTurn = useSelector(state => state.dashboard.currentTurn)

    const turnsLeft = gameLength - currentTurn;
    const dispatch = useDispatch()

    const history = useHistory()

    const goToLeaderBoard = () => {
        history.push(commonRoute.leaderboard)
    }

    const goToHomepage = () => {
        const token = localStorage.getItem('midasToken')
        const auth = 'Bearer '.concat(token)
        console.log('token ' + token)

        Fetch.get(API.gamePlay.cashFlow.newGame, {
            headers: {
                Authorization: auth
            }
        })
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    dispatch(setNewGame())
                    history.push(commonRoute.gameOptions)
                }
            })
            .catch(err => {
                console.log(err.message)
            })

    }

    const goToNextTurn = () => {
        const token = localStorage.getItem('midasToken')
        const auth = 'Bearer '.concat(token)
        console.log('token ' + token)

        Fetch.get(API.gamePlay.cashFlow.nextTurn, {
            headers: {
                Authorization: auth
            }
        })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    dispatch(setCurrentTurn(currentTurn + 1))
                    history.push(commonRoute.dashboard.cashFlow)
                }
            })
            .catch((err) => {
                console.log(err)
            })
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
                <div className="view-leaderboard" onClick={goToHomepage}>
                    <div className="leaderboard-btn">New Game</div>
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
