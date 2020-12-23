import React from 'react'
import { Grid } from '@material-ui/core'
import { homeRoutes } from './routes'
import RouteMapper from '../../utils/Router/RouteMapper'
import './style.scss'
import GameControl from './GameControl'
import SelectAvatar from './SelectAvatar'
import LeaderBoard from './LeaderBoard'

function Home() {
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className="game-control-home"
    >
      {/* <RouteMapper data={homeRoutes} /> */}
      {/* <GameControl /> */}
      <SelectAvatar />
      {/* <LeaderBoard /> */}

    </Grid>
  )
}

export default Home
