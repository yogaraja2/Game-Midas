import { Grid, Paper, Button } from '@material-ui/core'
import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import '../../Home/LeaderBoard/style.scss'
import { commonRoute } from "../../../config/routes";
import { useHistory } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import API, { URL } from '../../../Api'

const Players = ({ label, imgUrl, points, place, id, bgClr }) => {
    return (
        <Paper elevation={2} className={clsx('paper-class', `player-${id}`)}>
            <div style={{ backgroundColor: `${bgClr}` }} className="player-border">
                <div className="player-image">
                    <div className="image-warp">
                        <img
                            src={require(`../../../assets/img/${imgUrl}.svg`).default}
                            alt={label}
                        />
                    </div>
                </div>
                <div className="player-place">
                    <img
                        src={require(`../../../assets/img/${id}.svg`).default}
                        alt={place}
                    />
                </div>
            </div>
            <div className="player-label">{label}</div>
            <div className="player-points">{points}</div>
            <div className="player-position">
                <img
                    src={require(`../../../assets/img/${place}.svg`).default}
                    alt={place}
                />
            </div>
        </Paper>
    )
}

function LeaderBoard() {

    const [playersList, setPlayersList] = useState([])
    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    useEffect(() => {
        API.get(URL.leaderBoard, {
            headers: {
                Authorization: auth
            }
        })
            .then((res) => {
                // console.log('res')
                // console.log(res)
                const data = res?.data?.leaderboards
                // console.log('res data')
                // console.log(data)
                setPlayersList(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    const topThree = playersList?.filter((item, index) => index < 3)
    // console.log('top 3')
    // console.log(topThree)

    const history = useHistory()
    const goToHome = () => {
        history.push(commonRoute.instructorLogin.instructorHome)
    }

    return (
        <div className="leader-board-card">
            <Grid container justify="center" className="leader-board-container">
                <Grid item xs={12} md={10} lg={8} className="top-three-players">
                    <Players
                        label={topThree[1]?.username}
                        imgUrl={`User1`}
                        points={topThree[1]?.score}
                        id={'2'}
                        place={'secondPlace'}
                        bgClr={'#8DB596'}
                    />
                    <Players
                        label={topThree[0]?.username}
                        imgUrl={`user2`}
                        points={topThree[0]?.score}
                        id={'1'}
                        place={'firstPlace'}
                        bgClr={'#F05454'}
                    />
                    <Players
                        label={topThree[2]?.username}
                        imgUrl={`user3`}
                        points={topThree[2]?.score}
                        id={'3'}
                        place={'thirdPlace'}
                        bgClr={'#5352ED'}
                    />
                </Grid>

                <Grid item xs={12} md={10} lg={8} className="other-players">
                    <table className="leader-board-table">
                        <thead className="table-heading">
                            <tr className="title">
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {playersList?.map((item, index) => (
                                <tr key={index} className="table-rows">
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.country}</td>
                                    <td style={{ color: '#009ffd' }}>{item.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Grid>
                <div className="btn-wrap">
                    <Button className="back-btn" onClick={goToHome}>Back </Button>
                </div>
            </Grid>
        </div>
    )
}

export default LeaderBoard
