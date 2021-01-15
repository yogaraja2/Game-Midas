import React from 'react'
import { Grid } from '@material-ui/core'
import Entry from './Entry'

function Income({ size }) {
  return (
    <Grid item {...size} className="income-sec stat-data-sec">
      <div className="content-wrap">
        <Entry label="Salary" value={300} />
        <Entry label="Money borrowed" value={300} />
        <Entry label="Other income" value={300} />
        <hr className="divider" />
        <Entry label="Total income" value={300} />
      </div>
    </Grid>
  )
}

export default Income
