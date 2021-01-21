import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import Card from '../../../components/Card'
import YearBar from '../../../components/YearBar'
import './styles.scss'
import Income from './Income'
import StatTotal from './StatTotal'
import FExpenses from './FExpenses'
import VExpenses from './VExpenses'
import SatisfactionCard from './SatisfactionCard'
import { useLocation } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'

function CashFlow(props) {
  const [dataYear, setDataYear] = useState(1)
  const [isPassed, setPassed] = useState(false)
  const { state } = useLocation()
  console.log('state')
  console.log(state)
  const currentData = state.data?.filter((f) => f.turn === dataYear)[0]

  const statSectionSize = {
    md: 4,
    sm: 6,
    xs: 12
  }
  const allyProps = {
    size: statSectionSize,
    data: currentData?.userExpenses
  }

  const switchToEntry = () => {
    props.history.push(commonRoute.dashboard.cashFlow)
  }

  useEffect(() => {
    if (!state.data) {
      switchToEntry()
    } else {
      setDataYear(state.data[0].totalTurns)
    }
  }, [state])

  useEffect(() => {
    const score = Object.values(currentData.satisfactionPoints)
    let flag = true
    for (let i of score) {
      if (i <= 0) {
        flag = false
        break
      }
    }
    setPassed(flag)
  }, [dataYear, currentData])

  const handleNext = () => {
    if (dataYear <= currentData.gameLength) {
      if (currentData.totalTurns === dataYear) {
        if (isPassed) switchToEntry()
      }
    }
  }

  return (
    <div className="dash-cash-flow-page">
      <YearBar
        value={dataYear}
        onClick={setDataYear}
        // years={currentData?.gameLength}
        years={40}
        clickableTill={currentData?.totalTurns}
      />

      <div className="stat-card-wrap">
        <h2 className="sec-head stats">Year {dataYear}</h2>
        <Card className="stat-card" transparent>
          <Grid container className="stat-grid-wrap">
            <Income {...allyProps} />
            <FExpenses {...allyProps} />
            <VExpenses {...allyProps} />
            <StatTotal {...allyProps} />
          </Grid>
        </Card>

        <h3 className="sec-head sat">Satisfaction Source</h3>
        <SatisfactionCard data={currentData?.satisfactionPoints} />

        <div className="action-btn-wrap">
          <div className="btn-wrap">
            <Button className="btn prev-btn" onClick={switchToEntry}>
              Back
            </Button>
          </div>

          {currentData.totalTurns === dataYear && (
            <div className="btn-wrap" onClick={handleNext}>
              <Button disabled={!isPassed} className="btn nxt-btn">
                Next Turn
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CashFlow
