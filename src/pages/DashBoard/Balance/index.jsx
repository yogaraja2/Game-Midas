import React, { useState } from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import { Button, Grid } from '@material-ui/core'
import './styles.scss'
import YearBar from '../../../components/YearBar'

function Balance() {
  const [dataYear, setDataYear] = useState(1)

  return (
    <div className="dashboard-balance-page">
      <YearBar value={dataYear} onClick={setDataYear} years={10} />

      <h2 className="sec-head">Assets</h2>
      <Assets />
      <Liabilities />

      <div className="btn-wrap">
        <Button className="nxt-btn">Next</Button>
      </div>
    </div>
  )
}

export default Balance
