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

const playersList = [
    { rank: 1, name: "Victoria", country: 'India', score: 7548653 },
    { rank: 2, name: "Benjamin", country: 'USA', score: 6209475 },
    { rank: 3, name: "James", country: 'UK', score: 364855 },
    { rank: 4, name: "Dom", country: 'Srilanka', score: 304855 },
    { rank: 5, name: "Elisa", country: 'Russia', score: 254855 },
    { rank: 6, name: "Fazil", country: 'Japan', score: 204855 },
    { rank: 7, name: "Google", country: 'Brazil', score: 154855 },
    { rank: 8, name: "Hameed", country: 'Mexico', score: 104855 },
    { rank: 9, name: "Irin", country: 'Italy', score: 104700 },
    { rank: 10, name: "JackSparrow", country: 'UK', score: 54855 },
    // { rank: 1, name: "Victoria", country: 'India', score: 7548653 },
    // { rank: 2, name: "Benjamin", country: 'USA', score: 6209475 },
    // { rank: 3, name: "James", country: 'UK', score: 364855 },
    // { rank: 4, name: "Dom", country: 'Srilanka', score: 304855 },
    // { rank: 5, name: "Elisa", country: 'Russia', score: 254855 },
    // { rank: 6, name: "Fazil", country: 'Japan', score: 204855 },
    // { rank: 7, name: "Google", country: 'Brazil', score: 154855 },
    // { rank: 8, name: "Hameed", country: 'Mexico', score: 104855 },
    // { rank: 9, name: "Irin", country: 'Italy', score: 104700 },
    // { rank: 10, name: "JackSparrow", country: 'UK', score: 54855 },
];

function LeaderBoard() {
    return (
        <Grid item xs={11} md={10} className="leader-board-card">
            <Grid container className="leader-board-container">
                <Grid container justify="space-between" alignContent="center" className="top-three-players">
                    <Players
                        label="Benjamin"
                        imgUrl={`User1`}
                        points={`6209475`}
                        id={'2'}
                        place={'secondPlace'}
                        bgClr={'#8DB596'}
                    />
                    <Players
                        label="Victoria"
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

                <Grid container alignContent="center" className="other-players">
                    <div className="leader-board-table-wrap">
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
                                {playersList.map((item, index) =>
                                    <tr key={index} className="table-rows">
                                        <td>{item.rank}</td>
                                        <td>{item.name}</td>
                                        <td>{item.country}</td>
                                        <td style={{ color: '#009ffd' }}>{item.score}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LeaderBoard
