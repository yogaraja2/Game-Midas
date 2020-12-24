import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'

const SelectOptions = ({ label, imgUrl, id, selected, setSelected }) => {
    return (
        <div
            className={clsx('option-wrap', selected === id && 'selected')}
            onClick={setSelected.bind(this, id)}
        >
            <div className="option-image">
                <div className="selector-bg">
                    <div className="image-warp">
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

const SelectCar = ({ label, imgUrl, id, selected, setSelected }) => {
    return (
        <div
            className={clsx('carOption-wrap', selected === id && 'selected')}
            onClick={setSelected.bind(this, id)}
        >
            <div className="option-image">
                <div className="selector-bg">
                    <div className="image-warp">
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

const SelectHouse = ({ label, imgUrl, id, selected, setSelected }) => {
    return (
        <div
            className={clsx('houseOption-wrap', selected === id && 'selected')}
            onClick={setSelected.bind(this, id)}
        >
            <div className="option-image">
                <div className="selector-bg">
                    <div className="image-warp">
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

function SelectDreams() {
    const [selected, setSelected] = useState(null)

    const allyProps = { selected, setSelected }
    return (
        <Grid
            container
            justify="center"
            alignContent="center"
            className="dream-control-home"
        >
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
                    <SelectOptions
                        label="Visit Taj Mahal"
                        imgUrl={`Traveller`}
                        id={'visiting'}
                        {...allyProps}
                    />
                    <SelectOptions
                        label="Travel To Abroad"
                        imgUrl={`Flight`}
                        id={'flight'}
                        {...allyProps}
                    />
                    <SelectOptions
                        label="Hill Station"
                        imgUrl={'HillStation'}
                        id={'hillStation'}
                        {...allyProps}
                    />
                    <SelectOptions
                        label="Visit Beach"
                        imgUrl={`Beach`}
                        id={'beach'}
                        {...allyProps}
                    />
                    <SelectOptions
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
                    className="carOptions-selector"
                >
                    <SelectCar
                        label="Relisible Car"
                        imgUrl={`RelisibleCar`}
                        id={'relisibleCar'}
                        {...allyProps}
                    />
                    <SelectCar
                        label="Economy Car"
                        imgUrl={`EconomyCar`}
                        id={'economyCar'}
                        {...allyProps}
                    />
                    <SelectCar
                        label="Fully Loaded Car"
                        imgUrl={'FullLoadCar'}
                        id={'fullLoadCar'}
                        {...allyProps}
                    />
                    <SelectCar
                        label="Luxury Car"
                        imgUrl={'LuxuryCar'}
                        id={'luxuryCar'}
                        {...allyProps}
                    />
                    <SelectCar
                        label="Speedster Car"
                        imgUrl={`SpeedsterCar`}
                        id={'speedsterCar'}
                        {...allyProps}
                    />

                </Grid>
                <div className="header-sec">
                    <h3 className="main-head">House</h3>
                </div>
                <Grid
                    container
                    justify="space-around"
                    alignContent="center"
                    className="houseOptions-selector"
                >
                    <SelectHouse
                        label="Studio Apartment"
                        imgUrl={`StudioApt`}
                        id={'studioApt'}
                        {...allyProps}
                    />
                    <SelectHouse
                        label="Fixer Upper"
                        imgUrl={`FixerUp`}
                        id={'fixerUp'}
                        {...allyProps}
                    />
                    <SelectHouse
                        label="Rambler"
                        imgUrl={'Rambler'}
                        id={'rambler'}
                        {...allyProps}
                    />
                    <SelectHouse
                        label="Mansion"
                        imgUrl={`Mansion`}
                        id={'mansion'}
                        {...allyProps}
                    />
                    <SelectHouse
                        label="Chateau"
                        imgUrl={'Chateau'}
                        id={'chateau'}
                        {...allyProps}
                    />
                </Grid>

                <div className="btn-wrap">
                    <Button className="nxt-btn">Next</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default SelectDreams