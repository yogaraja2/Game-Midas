import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import './style.scss'

const Players = ({ label, imgUrl, points, id, bgClr }) => {
  return (
    <div>
      <div style={{ backgroundColor: `${bgClr}` }} className="player-border">
        <div className="player-image">
          <div className="image-warp">
            <img
              src={require(`../../../assets/img/${imgUrl}.svg`).default}
              alt={label}
            />
          </div>
        </div>
      </div>
      <div className="player-label">{label}</div>
      <div className="player-points">{points}</div>
    </div>
  )
}

function LeaderBoard() {
  return (
    <Grid item xs={11} md={10} className="leader-player-card">
      <Grid>
        <Grid style={{ display: 'flex' }} className="play-main-class">
          <Grid container item xs={12}>
            <Paper className="paper-class">
              <Players
                label="Player 2"
                imgUrl={`user2`}
                points={`8888`}
                id={'second'}
                bgClr={'green'}
              />
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={12}
            style={{ marginTop: '-50px', marginBottom: '50px' }}
          >
            <Paper className="paper-class">
              <Players
                label="Player 1"
                imgUrl={`User1`}
                points={`9999`}
                id={'first'}
                bgClr={'red'}
              />
            </Paper>
          </Grid>
          <Grid container item xs={12}>
            <Paper className="paper-class">
              <Players
                label="Player 3"
                imgUrl={`user3`}
                points={`7777`}
                id={'third'}
                bgClr={'orange'}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <TableContainer component={Paper}>
          <Table aria-label="simple table"></Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default LeaderBoard