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
                src={require(`../../../assets/img/${imgUrl}.svg`).default}
                alt={label}
              />
            </div>
          </div>
        </div>
      </div>
    )
}

function GameControl() {
  const [selected, setSelected] = useState(null)

  const allyProps = { selected, setSelected }
  
  return (
    <Grid item xs={11} md={10} className="game-option-card">
      <Grid
        container
        justify="space-around"
        alignContent="center"
        className="options-selector"
      >
        <Options
          label="Leader Board"
          imgUrl={`Leader-Board`}
          id={'leaderboard'}
          {...allyProps}
        />
        <Options
          label="New"
          imgUrl={`New`}
          id={'new'}
          {...allyProps}
        />
        <Options
          label="Resume"
          imgUrl={'Resume'}
          id={'resume'}
          {...allyProps}
        />
      </Grid>
      <div className="btn-wrap">
        <Button className="nxt-btn">Next</Button>
      </div>
    </Grid>
  )
}

export default GameControl