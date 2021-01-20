import React from 'react'
import { Grid } from '@material-ui/core'
import Entry from './Entry'

function FExpenses({ size, data }) {
  return (
    <Grid item {...size} className="fix-exp-sec stat-data-sec">
      <div className="content-wrap m-left">
        <Entry label="Mortgate" value={data?.mortgage} />
        <Entry label="Taxes" value={data?.taxes} />
        <Entry label="Utilites" value={data?.utilities} />
      </div>
    </Grid>
  )
}

export default FExpenses
