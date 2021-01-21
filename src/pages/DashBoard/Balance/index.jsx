import React, { useEffect, useState } from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import { Button, Grid } from '@material-ui/core'
import './styles.scss'
import YearBar from '../../../components/YearBar'
import useFetch from '../../../hooks/useFetch'
import { API } from '../../../config/apis'
import HighlightCard from '../../../components/HighlightCard'

function Balance() {
  const [dataYear, setDataYear] = useState(1)
  const { data } = useFetch({
    url: API.gamePlay.balance
  })

  const currentData = data?.filter((f) => f.year === dataYear)[0]

  useEffect(() => {
    !!currentData?.length && setDataYear(currentData?.currentTurn)
  }, [currentData])

  return (
    <div className="dashboard-balance-page">
      <YearBar
        value={dataYear}
        onClick={setDataYear}
        years={currentData?.gameLength}
        clickableTill={currentData?.currentTurn}
      />

      <div className="asset-bal-det">
        <h2 className="sec-head">Assets</h2>
        <Assets data={currentData?.assets} />
        <HighlightCard
          className="asset-tot"
          label="Total Assets"
          value={currentData?.assets?.totalAssets}
        />
      </div>

      <div className="liblty-bal-det">
        <Liabilities data={currentData?.liabilities} />
      </div>

      <div className="btn-stat-wrap">
        <HighlightCard
          className="networth"
          label="Net worth"
          value={currentData?.netWorth}
        />

        <div className="btn-wrap">
          <Button className="nxt-btn">Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Balance
