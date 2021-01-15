import React from 'react'
import { Grid } from '@material-ui/core'
import Entry from './Entry'

function FExpenses({ size }) {
  return (
    <Grid item {...size} className="fix-exp-sec stat-data-sec">
      <div className="content-wrap m-left">
        <Entry label="Mortgate" value={300} />
        <Entry label="Taxes" value={300} />
        <Entry label="Utilites" value={300} />
      </div>
    </Grid>
  )
}

export default FExpenses
