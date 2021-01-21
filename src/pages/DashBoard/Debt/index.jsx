import React, { useState } from 'react'
import './styles.scss'
import YearBar from '../../../components/YearBar'
import { Button, Grid } from '@material-ui/core'
import Card from '../../../components/Card'
import AmountToBorrow from './AmtToBorrow'
import LoanBalance from './LoanBalance'
import MinimumPayment from './MinimumPayment'
import AmountToRepay from './AmountToRepay'

function Debt() {
    const [dataYear, setDataYear] = useState(1)

    const statSectionSize = {
        md: 4,
        sm: 6,
        xs: 12
    }
    const apiData = {
        creditCard: 1000,
        carLoan: 2000,
        mortgage: 1500,
        studentLoan: 500,
    }
    const allyProps = {
        size: statSectionSize,
        data: apiData,
    }

    return (
        <div className="debt-mgt-main">
            {/* <h1>Debt Management</h1> */}
            <YearBar
                value={dataYear}
                onClick={setDataYear}
                years={40}
            />

            <div className="debt-card-wrap">
                <h2 className="sec-head stats">Year {dataYear}</h2>
                <Card className="stat-card" transparent>
                    <Grid container className="stat-grid-wrap">
                        <AmountToBorrow {...allyProps} />
                        <LoanBalance {...allyProps} />
                        <MinimumPayment {...allyProps} />
                    </Grid>
                    <Grid container className="stat-grid-wrap">
                        <AmountToRepay {...allyProps} />
                    </Grid>
                </Card>
            </div>
        </div>
    )
}

export default Debt
