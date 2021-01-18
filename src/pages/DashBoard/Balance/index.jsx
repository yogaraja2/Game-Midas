import { Grid } from '@material-ui/core'
import React from 'react'
import Assets from './Assets'
import './styles.scss'

function Balance() {
  return (
    <div className="dashboard-balance-page">
      <div className="assets-grid">
        <h2 className="sec-head">Assets</h2>
        <Assets />
      </div>
    </div>
  )
}

export default Balance
