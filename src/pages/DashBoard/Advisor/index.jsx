import { Grid } from '@material-ui/core'
import React from 'react'
import './styles.scss'

function Advisor() {
    return (
        <Grid item xs={12} md={10} className="advisor-card">
            <img src={require('../../../assets/img/TitleLogo.svg').default} alt="title-logo"
                style={{ width: 150, height: 70 }} />
            <h1 style={{ textAlign: 'center' }}>Advisor Page</h1>
        </Grid>
    )
}

export default Advisor
