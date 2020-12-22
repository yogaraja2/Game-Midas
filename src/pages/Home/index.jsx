import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'

const Options = ({ label, imgUrl, id, selected, setSelected }) => {
  return (
    <div
      className={clsx('option-wrap', selected === id && 'selected')}
      onClick={setSelected.bind(this, id)}
    >
      <div className="option-label">{label}</div>
      <div className="option-image">
        <div className="selector-bg">
          <div className="image-warp">
            <img
              src={require('../../assets/img/Leader-Board.svg').default}
              alt={label}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const [selected, setSelected] = useState(null)

  const allyProps = { selected, setSelected }

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className="game-control-home"
    >
      <Grid item xs={11} md={10} className="inner-container">
        <Grid
          container
          justify="space-around"
          alignContent="center"
          className="options-selector"
        >
          <Options
            label="Leader Board"
            imgUrl={'../../assets/img/Leader-Board.svg'}
            id={'leaderboard'}
            {...allyProps}
          />
          <Options
            label="New"
            imgUrl={'../../assets/img/New.svg'}
            id={'new'}
            {...allyProps}
          />
          <Options
            label="Resue"
            imgUrl={'../../assets/img/Resume.svg'}
            id={'resume'}
            {...allyProps}
          />
        </Grid>
        <div className="btn-wrap">
          <Button className="nxt-btn">Next</Button>
        </div>
      </Grid>
    </Grid>
  )
}

export default Home
