import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import AssetCard from '../../../components/AssetCard'
import SellPopup from './SellPopup'

function Assets() {
  const [confDlg, setConfDlg] = useState({
    status: false,
    data: null
  })

  const handleClick = (data) => {
    setConfDlg({
      status: true,
      data
    })
  }

  const handleDlgClose = () => {
    setConfDlg({
      status: false,
      data: null
    })
  }

  const size = {
    xs: 6,
    md: 3
  }

  const allyProps = {
    size,
    transparent: true
  }

  return (
    <Grid container spacing={3} className="assets-wrap">
      <AssetCard
        img="FullLoadCar"
        value={300000}
        isBought
        {...allyProps}
        onSell={handleClick.bind(this, { img: 'FullLoadCar', name: 'car' })}
      />
      <AssetCard
        img="Rambler"
        value={300000}
        isBought
        {...allyProps}
        onSell={handleClick.bind(this, { img: 'Rambler', name: 'House' })}
      />
      <AssetCard img="savings" value={300000} {...allyProps} />
      <AssetCard img="retire" value={300000} {...allyProps} />
      {confDlg.status && (
        <SellPopup onClose={handleDlgClose} data={confDlg.data} />
      )}
    </Grid>
  )
}

export default Assets
