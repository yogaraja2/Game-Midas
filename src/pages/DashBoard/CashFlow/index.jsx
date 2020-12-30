import { Grid } from '@material-ui/core'
import React from 'react'
import './styles.scss'

function CashFlow() {
    return (
        <Grid item xs={12} md={10} className="cash-flow-card">
            <img src={require('../../../assets/img/TitleLogo.svg').default}
                style={{ width: 150, height: 70 }} />
            <h1 style={{ textAlign: 'center' }}>Cash Flow Page</h1>
        </Grid>
    )
}

export default CashFlow
