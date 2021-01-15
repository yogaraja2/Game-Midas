import React from 'react'

function DashHead() {
  return (
    <div className="dashboard-header">
      <div className="logo-wrap">
        <img
          className="m-logo"
          src={require('../../assets/img/TitleLogo.svg').default}
          alt="logo"
        />
      </div>

      <div className="total-cash">
        <img
          src={require('../../assets/img/doller 2.svg').default}
          alt="Coin"
          className="cash-icon"
        />
        <span className="cash-value">$10000</span>
      </div>
    </div>
  )
}

export default DashHead
