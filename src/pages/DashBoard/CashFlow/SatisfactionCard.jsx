import React from 'react'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'
import Card from '../../../components/Card'

function SatisfactionCard() {
  const Score = ({ label, value, noMargin, xsfull }) => (
    <Grid
      item
      sm={2}
      xs={xsfull ? 12 : 6}
      className={clsx(
        'score-wrap',
        value < 1 ? 'neg-sat' : 'pve-sat',
        !noMargin && 'mar-on-mob'
      )}
    >
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </Grid>
  )

  return (
    <Card className="satisfiction-card" transparent>
      <Grid container justify="space-around" className="satisfiction-grid">
        <Score xsfull label="Housing" value={300} noMargin />
        <Score label="Living Expenses" value={300} />
        <Score label="Entertainment" value={-300} />
        <Score label="Vehicle" value={300} />
        <Score label="Retirement" value={-300} />
      </Grid>
    </Card>
  )
}

export default SatisfactionCard
