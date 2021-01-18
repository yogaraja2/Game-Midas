import React from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import { Button, Grid } from '@material-ui/core'
import './styles.scss'

function Balance() {
  return (
    <div className="dashboard-balance-page">
      <h2 className="sec-head">Assets</h2>
      <Assets />
      <Liabilities />

      <div className="nxt-btn-wrap">
        <Button className="nxt-btn">Next</Button>
      </div>
    </div>
  )
}

export default Balance
