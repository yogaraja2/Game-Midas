import { Grid } from '@material-ui/core'
import React from 'react'
import './styles.scss'

function Stats() {
    return (
        <Grid item xs={12} md={10} className="stats-flow-card">
            <img src={require('../../../assets/img/TitleLogo.svg').default}
                style={{ width: 150, height: 70 }} />
            <h1 style={{ textAlign: 'center' }}>Stats Page</h1>
        </Grid>
    )
}

export default Stats
