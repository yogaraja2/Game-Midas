import React, { useEffect, useState } from 'react'
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

    const [details, setDetails] = useState(null)

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    useEffect(() => {
        Fetch.get(API.gamePlay.mainDashboard, {
            headers: {
                Authorization: auth
            }
        })
            .then(res => {
                console.log('test')
                console.log(res)
                setDetails(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])



    const gameLength = useSelector(state => state.selectAvatar.gameLength)
    const currentTurn = useSelector(state => state.dashboard.currentTurn)

    const turnsLeft = gameLength - currentTurn + 1;
    const dispatch = useDispatch()

    const history = useHistory()

    const goToLeaderBoard = () => {
        history.push(commonRoute.leaderboard)
    }

    const goToNextTurn = () => {

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
            <div className="header-wrap">
                <div className="points-wrap">
                    <img src={pointIcon} alt='points' className="point-icon" />
                    <span className="points">{details?.totalScore}</span>
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
            <div className="body-wrap">
                <div className="field-wrap">
                    <div className="head-line">Username</div>
                    <div className="content">{details?.name}</div>
                </div>
                <div className="field-wrap">
                    <div className="head-line">Rank</div>
                    <div className="content">{details?.leaderBoardRank}</div>
                </div>
                <div className="field-wrap">
                    <div className="head-line">Score</div>
                    <div className="content">{details?.totalScore}</div>
                </div>
                <div className="field-wrap">
                    <div className="head-line">Cash Available</div>
                    <div className="content">${55000}</div>
                </div>
                <div className="field-wrap">
                    <div className="head-line">Retirement Savings</div>
                    <div className="content">${details?.retirementSavings}</div>
                </div>
                <div className="field-wrap">
                    <div className="head-line">Networth</div>
                    <div className="content">${details?.networth}</div>
                </div>
            </div>
            <div className="footer-wrap">
                <div className="btn-wrap" onClick={goToLeaderBoard}>
                    <div className="leaderboard-btn">View Leaderboard</div>
                </div>

                <div className="btn-wrap" onClick={goToNextTurn}>
                    <div className="nxt-turn-btn">
                        <img src={require('../../../assets/img/nexTurn.svg').default} />
                        <span>NextTurn</span>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default MainDash
