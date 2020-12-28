import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'
import doller from '../../../assets/img/doller 2.svg'

const SelectDream = ({ label, imgUrl, id, dream, setDream }) => {
    return (
        <div
            className={clsx('option-wrap', dream === id && 'selected')}
            onClick={setDream.bind(this, id)}
        >
            <div className="option-image">
                <div className="image-warp">
                    <div className="selector-bg">
                        <img
                            src={require(`../../../assets/img/${imgUrl}.svg`).default}
                            alt={label}
                        />
                    </div>
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

const SelectCar = ({ label, imgUrl, cost, id, car, setCar }) => {
    return (
        <div
            className={clsx('option-wrap', car === id && 'selected')}
            onClick={setCar.bind(this, id)}
        >
            <div className="option-image">
                <div className="image-warp">
                    <div className="selector-bg">
                        <img
                            src={require(`../../../assets/img/${imgUrl}.svg`).default}
                            alt={label}
                        />
                        <div style={{ marginTop: '10px', bottom: '5px' }}>
                            <img src={doller} style={{ width: 20, height: 21, position: 'absolute', }} />
                            <span style={{
                                position: 'relative', fontSize: 18,
                                fontWeight: 'bold', color: ' #747d8c', marginLeft: 30
                            }}>{cost}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

const SelectHouse = ({ label, imgUrl, cost, id, house, setHouse }) => {
    return (
        <div
            className={clsx('option-wrap', house === id && 'selected')}
            onClick={setHouse.bind(this, id)}
        >
            <div className="option-image">
                <div className="image-warp">
                    <div className="selector-bg">
                        <img
                            src={require(`../../../assets/img/${imgUrl}.svg`).default}
                            alt={label}
                            style={{ width: 150, height: 100 }}
                        />
                        <div>
                            <img src={doller} style={{ width: 20, height: 21, position: 'absolute', }} />
                            <span style={{ position: 'relative', fontSize: 18, fontWeight: 'bold', color: ' #747d8c', marginLeft: 30 }}>
                                {cost}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

function SelectDreams() {

    const [dream, setDream] = useState(null)
    const [car, setCar] = useState(null)
    const [house, setHouse] = useState(null)

    const allyProps = { dream, setDream }
    const restCar = { car, setCar }
    const restHouse = { house, setHouse }

    return (
        <Grid item xs={12} md={10} className="select-dreams-card">
            <div className="header-sec">
                <h3 className="main-head">Select Dreams</h3>
            </div>
            <Grid
                container
                justify="space-around"
                alignContent="center"
                className="options-selector"
            >
                <SelectDream
                    label="Visit Taj Mahal"
                    imgUrl={`Traveller`}
                    id={'visiting'}
                    {...allyProps}
                />
                <SelectDream
                    label="Travel To Abroad"
                    imgUrl={`Flight`}
                    id={'flight'}
                    {...allyProps}
                />
                <SelectDream
                    label="Hill Station"
                    imgUrl={'HillStation'}
                    id={'hillStation'}
                    {...allyProps}
                />
                <SelectDream
                    label="Visit Beach"
                    imgUrl={`Beach`}
                    id={'beach'}
                    {...allyProps}
                />
                <SelectDream
                    label="Long Ride"
                    imgUrl={'BikeRide'}
                    id={'bikeRide'}
                    {...allyProps}
                />
            </Grid>

            <div className="header-sec">
                <h3 className="main-head">Cars</h3>
            </div>
            <Grid
                container
                justify="space-around"
                alignContent="center"
                className="options-selector"
            >
                <SelectCar
                    label="Relisible Car"
                    imgUrl={`RelisibleCar`}
                    id={'relisibleCar'}
                    cost={60000}
                    {...restCar}
                />
                <SelectCar
                    label="Economy Car"
                    imgUrl={`EconomyCar`}
                    id={'economyCar'}
                    cost={70000}
                    {...restCar}
                />
                <SelectCar
                    label="Fully Loaded Car"
                    imgUrl={'FullLoadCar'}
                    id={'fullLoadCar'}
                    cost={80000}
                    {...restCar}
                />
                <SelectCar
                    label="Luxury Car"
                    imgUrl={'LuxuryCar'}
                    id={'luxuryCar'}
                    cost={90000}
                    {...restCar}
                />
                <SelectCar
                    label="Speedster Car"
                    imgUrl={`SpeedsterCar`}
                    id={'speedsterCar'}
                    cost={100000}
                    {...restCar}
                />
            </Grid>

            <div className="header-sec">
                <h3 className="main-head">House</h3>
            </div>
            <Grid
                container
                justify="space-around"
                alignContent="center"
                className="options-selector"
            >
                <SelectHouse
                    label="Studio Apartment"
                    imgUrl={`StudioApt`}
                    id={'studioApt'}
                    cost={1200000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Fixer Upper"
                    imgUrl={`FixerUp`}
                    id={'fixerUp'}
                    cost={1300000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Rambler"
                    imgUrl={'Rambler'}
                    id={'rambler'}
                    cost={1400000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Mansion"
                    imgUrl={`Mansion`}
                    id={'mansion'}
                    cost={1500000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Chateau"
                    imgUrl={'Chateau'}
                    id={'chateau'}
                    cost={1600000}
                    {...restHouse}
                />
            </Grid>

            <div className="btn-wrap">
                <Button className="nxt-btn">Next</Button>
            </div>
        </Grid>
    )
}

export default SelectDreams