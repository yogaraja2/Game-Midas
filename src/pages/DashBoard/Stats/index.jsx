import React, { useState } from 'react'
import './styles.scss'
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    DataLabel,
    ColumnSeries,
    SplineSeries
} from '@syncfusion/ej2-react-charts'
import { Grid } from '@material-ui/core'

function Stats() {

    const [scorexaxis, setScorexaxis] = useState({
        valueType: 'Category',
        majorGridLines: { width: 0 },
        textStyle: {
            fontStyle: 'bold'
        }
        // title: 'Months',
    })
    const [scoreyaxis, setScoreyaxis] = useState({
        minimum: 0, maximum: 500, interval: 50, title: 'Cost', majorGridLines: { width: 0 }, labelFormat: '${value}'
    })
    const scoreData = [
        { x: 'January', y: 420 },
        { x: 'February', y: 300 },
        { x: 'March', y: 450 },
        { x: 'April', y: 350 },
        { x: 'May', y: 420 },
        { x: 'June', y: 370 },
        { x: 'July', y: 180 },
        { x: 'August', y: 325 },
        { x: 'September', y: 280 },
        { x: 'October', y: 260 },
        { x: 'November', y: 300 },
        { x: 'December', y: 350 },
    ]

    const [networthxaxis, setNetworthxaxis] = useState({
        valueType: 'Category', majorGridLines: { width: 0 }
        // title: 'weeks',
    })
    const [networthyaxis, setNetworthyaxis] = useState({
        minimum: 0, maximum: 50, interval: 5, majorGridLines: { width: 0 }
    })
    const networthData = [
        { x: 'Monday', y: 5 },
        { x: 'Tuesday', y: 15 },
        { x: 'Wednesday', y: 25 },
        { x: 'Thursday', y: 15 },
        { x: 'Friday', y: 45 },
        { x: 'Saturday', y: 35 },
        { x: 'Sunday', y: 45 },
    ]
    const marker = { visible: true, width: 10, height: 10 }
    const retirementData = [
        { x: 'Monday', y: 25 },
        { x: 'Tuesday', y: 25 },
        { x: 'Wednesday', y: 25 },
        { x: 'Thursday', y: 25 },
        { x: 'Friday', y: 25 },
        { x: 'Saturday', y: 35 },
        { x: 'Sunday', y: 25 },
    ]

    return (
        <Grid container className="stats-main">
            <div className="title">
                <h1>Game Stats</h1>
            </div>
            <Grid item xs={12} md={10} className="score-wrap">
                <div className="chart-wrap">
                    <div className="chart-title">
                        <h1>Score</h1>
                    </div>
                    <ChartComponent id="charts" primaryXAxis={scorexaxis} primaryYAxis={scoreyaxis} tooltip={{ enable: true }} title="Score">
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={scoreData}
                                xName='x'
                                yName='y'
                                name='Score'
                                type='Column'
                                columnWidth={0.15}
                                fill='#009ffd'
                            // cornerRadius={{ topLeft: 10, topRight: 10 }}
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </Grid>
            <Grid item xs={12} md={10} className="score-wrap">
                <div className="chart-wrap">
                    <div className="chart-title">
                        <h1>Net Worth</h1>
                    </div>
                    <ChartComponent id="charts1" primaryXAxis={networthxaxis} primaryYAxis={networthyaxis} tooltip={{ enable: true, shared: true }} title="Networth">
                        <Inject services={[SplineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={networthData}
                                xName='x'
                                yName='y'
                                name='Networth'
                                type='Spline'
                                fill='#009ffd'
                                marker={marker}
                                width={5}
                            />
                            <SeriesDirective
                                dataSource={networthData}
                                xName='x'
                                yName='y'
                                name='Retirement Savings'
                                type='Column'
                                fill='orange'
                                columnWidth={0.01}
                                width={2}
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </Grid>
        </Grid>
    )
}

export default Stats
