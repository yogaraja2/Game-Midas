import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import AssetCard from '../../../components/AssetCard'
import SellPopup from './SellPopup'
import BuyPopup from './BuyPopup'

function Assets({ data }) {
  const [confDlg, setConfDlg] = useState({
    status: false,
    data: null,
    isSell: false
  })

  const handleClick = (data, isSell) => {
    setConfDlg({
      status: true,
      data,
      isSell
    })
  }

  const handleDlgClose = () => {
    setConfDlg({
      status: false,
      data: null,
      isSell: false
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
        value={data?.vehicle?.price}
        isBought
        isEnablesell={isEnablesell}
        {...allyProps}
        onClick={handleClick.bind(this, 0, false)}
        onSell={handleClick.bind(
          this,
          { img: 'FullLoadCar', name: 'car' },
          true
        )}
      />
      <AssetCard
        img="Rambler"
        value={data?.house?.price}
        isBought
        isEnablesell={isEnablesell}
        {...allyProps}
        onClick={handleClick.bind(this, 1, false)}
        onSell={handleClick.bind(this, { img: 'Rambler', name: 'House' }, true)}
      />
      <AssetCard img="savings" value={data?.chekingAndSavings} {...allyProps} />
      <AssetCard img="retire" value={data?.retirementSavings} {...allyProps} />
      {confDlg.status && confDlg.isSell && isEnablesell && (
        <SellPopup onClose={handleDlgClose} data={confDlg.data} />
      )}
      {confDlg.status && !confDlg.isSell && (
        <BuyPopup onClose={handleDlgClose} type={confDlg.data} />
      )}
    </Grid>
  )
}

export default Assets
