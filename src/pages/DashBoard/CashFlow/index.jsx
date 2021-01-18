import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import Card from '../../../components/Card'
import YearBar from '../../../components/YearBar'
import './styles.scss'
import Income from './Income'
import StatTotal from './StatTotal'
import FExpenses from './FExpenses'
import VExpenses from './VExpenses'
import SatisfactionCard from './SatisfactionCard'

function CashFlow() {
  const [dataYear, setDataYear] = useState(1)
  const statSectionSize = {
    md: 4,
    sm: 6,
    xs: 12
  }

  return (
    <div className="dash-cash-flow-page">
      <YearBar value={dataYear} onClick={setDataYear} years={10} />

      <div className="stat-card-wrap">
        <h2 className="sec-head stats">Year {dataYear}</h2>
        <Card className="stat-card" transparent>
          <Grid container className="stat-grid-wrap">
            <Income size={statSectionSize} />
            <FExpenses size={statSectionSize} />
            <VExpenses size={statSectionSize} />
            <StatTotal size={statSectionSize} />
          </Grid>
        </Card>

        <h3 className="sec-head sat">Satisfaction Source</h3>
        <SatisfactionCard />

        <div className="nxt-btn-wrap">
          <Button className="nxt-btn">Next</Button>
        </div>
      </div>
    </div>
  )
}

export default CashFlow
