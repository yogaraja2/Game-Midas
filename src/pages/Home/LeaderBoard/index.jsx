import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import './style.scss'


const Players = ({ label, imgUrl, points, place, id, bgClr }) => {
    return (
        <Paper elevation={2} className="paper-class">
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
                    <img src={require(`../../../assets/img/${id}.svg`).default} alt={place} />
                </div>
            </div>
            <div className="player-label">{label}</div>
            <div className="player-points">{points}</div>
            <div className="player-position">
                <img src={require(`../../../assets/img/${place}.svg`).default} alt={place} />
            </div>
        </Paper>
    )
}

function LeaderBoard() {
    return (
        <div className="leader-board-card">
            <Grid container className="leader-board-container">
                <Grid item xs={12} md={10} className="top-three-players">
                    <Players
                        label="Benjamin"
                        imgUrl={`User1`}
                        points={`6209475`}
                        id={'2'}
                        place={'secondPlace'}
                        bgClr={'#8DB596'}
                    />
                    <Players
                        label="William"
                        imgUrl={`user2`}
                        points={`7548653`}
                        id={'1'}
                        place={'firstPlace'}
                        bgClr={'#F05454'}
                    />
                    <Players
                        label="James"
                        imgUrl={`user3`}
                        points={'364855'}
                        id={'3'}
                        place={'thirdPlace'}
                        bgClr={'#5352ED'}
                    />
                </Grid>

                <Grid item xs={12} md={10} className="other-players">

                </Grid>
            </Grid>
        </div>
    )
}

export default LeaderBoard
