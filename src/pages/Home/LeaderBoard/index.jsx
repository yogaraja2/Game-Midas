import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'

const Players = ({ label, imgUrl, points, id }) => {
    return (
        <div className="player-border">
            <div className="player-image">
                <div className="image-warp">
                    <img
                        src={require(`../../../assets/img/${imgUrl}.svg`).default}
                        alt={label}
                    />
                </div>
            </div>
            <div className="player-points">{points}</div>
            <div className="player-label">{label}</div> 
        </div>
    )
  }

function LeaderBoard() {
    return (
        <Grid item xs={11} md={10} className="leader-player-card">
            <Grid style={{display:"flex"}}>
                <Players
                    label="Player 2"
                    imgUrl={`user2`}
                    points={`8888`}
                    id={"second"}
                />
                <Players
                    label="Player 1"
                    imgUrl={`User1`}
                    points={`9999`}
                    id={"first"}
                />
                <Players
                    label="Player 3"
                    imgUrl={`user3`}
                    points={`7777`}
                    id={"third"}
                />
            </Grid>
        </Grid>
    )
}

export default LeaderBoard