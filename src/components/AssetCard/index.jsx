import { Grid } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import Card from '../Card'
import GameCoin from '../GameCoin'
import './style.scss'

function AssetCard({ className, size, isBought, img, value, isBlack, color }) {
  return (
    <Grid
      item
      {...size}
      className={clsx(
        'asset-card-wrap',
        className,
        isBought && 'is-bought',
        !isBlack && 'is-blue'
      )}
    >
      <Card className="asset-card">
        {isBought && <div className="sell-sign">Sell</div>}

        {!!img && (
          <img
            className="asset-img"
            src={require(`../../assets/img/${img}.svg`).default}
            alt="icon"
          />
        )}

        <GameCoin
          className="asset-value"
          value={value}
          fontSize={1.5}
          iconSize={2}
          weight={700}
          color={color ?? '#009FFD'}
        />
      </Card>
    </Grid>
  )
}

export default AssetCard
