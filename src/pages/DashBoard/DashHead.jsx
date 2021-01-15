import React from 'react'
import { IconButton } from '@material-ui/core'
import { CgMenuLeftAlt as MenuIcon } from 'react-icons/cg'

function DashHead({ toggleMenu }) {
  return (
    <div className="dashboard-header">
      <div className="left-part">
        <IconButton className="menu-icon-btn" onClick={toggleMenu}>
          <MenuIcon className="menu-icon" />
        </IconButton>
        <div className="logo-wrap">
          <img
            className="m-logo"
            src={require('../../assets/img/TitleLogo.svg').default}
            alt="logo"
          />
        </div>
      </div>

      <div className="right-part">
        <div className="total-cash">
          <img
            src={require('../../assets/img/doller 2.svg').default}
            alt="Coin"
            className="cash-icon"
          />
          <span className="cash-value">$10000</span>
        </div>
      </div>
    </div>
  )
}

export default DashHead