import React from 'react'
import { Grid } from '@material-ui/core'
import Entry from './Entry'

function VExpenses({ size }) {
  return (
    <Grid item {...size} className="var-exp-sec stat-data-sec">
      <div className="content-wrap m-left">
        <Entry label="Living Expenses" value={300} />
        <Entry label="Entertainment" value={300} />
        <Entry label="Retirement Savings" value={300} />
        <Entry label="Debt Repayment " value={300} />
      </div>
    </Grid>
  )
}

export default VExpenses
