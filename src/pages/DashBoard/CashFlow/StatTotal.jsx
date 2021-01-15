import React from 'react'
import { Grid } from '@material-ui/core'
import Entry from './Entry'

function StatTotal() {
  return (
    <Grid item container justify="flex-end" xs={12} className="stat-total-grid">
      <Grid item md={3} sm={4} xs={12} className="stat-total-wrap">
        <div>
          <div className="content-grid">
            <Entry endEven label="Total expenses" value={10000} />
            <Entry endEven label="Annual" value={10000} />
            <Entry endEven label="Savings available" value={10000} />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default StatTotal
