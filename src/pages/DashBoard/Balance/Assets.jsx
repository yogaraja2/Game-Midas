import React from 'react'
import { Grid } from '@material-ui/core'
import AssetCard from '../../../components/AssetCard'

function Assets() {
  const size = {
    xs: 6,
    md: 3
  }

  return (
    <Grid container spacing={3} className="assets-wrap">
      <AssetCard img="FullLoadCar" value={300000} isBought size={size} />
      <AssetCard img="Rambler" value={300000} isBought size={size} />
      <AssetCard img="savings" value={300000} isBought size={size} />
      <AssetCard img="retire" value={300000} isBought size={size} />
    </Grid>
  )
}

export default Assets
