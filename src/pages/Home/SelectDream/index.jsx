import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'
import doller from '../../../assets/img/doller 2.svg'
import pointIcon from '../../../assets/img/pointsIcon.svg'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'

const SelectDream = ({ label, imgUrl, cost, points, id, dream, setDream}) => {
    const selected = dream === id ? 'selected' : '';
    // if (dreams === id) {
    //     setDreams({ dream: id, cost: cost })
    // }

    return (
        <div className="option-wrap" onClick={setDream.bind(this, id)}>
            <div className="option-image" >
                <div className={`image-warp ${selected}`}>
                    <img style={{ height: '100px' }}
                        src={require(`../../../assets/img/${imgUrl}.svg`).default}
                        alt={label}
                    />
                    <div>
                        <img src={doller} alt={label} style={{ width: 20, height: 21, position: 'absolute' }} />
                        <span style={{
                            position: 'relative', fontSize: 18,
                            fontWeight: 'bold', color: ' #747d8c', marginLeft: 30
                        }}>{cost}</span>
                    </div>
                    {/* <div>
                        <img src={pointIcon} alt={label} style={{ width: 20, height: 21, position: 'absolute' }} />
                        <span style={{
                            position: 'relative', fontSize: 18,
                            fontWeight: 'bold', color: ' #747d8c', marginLeft: 30
                        }}>{points}</span>
                    </div> */}
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

const SelectCar = ({ label, imgUrl, cost, points, id, car, setCar }) => {
    const selected = car === id ? 'selected' : ''
    return (
        <div className='option-wrap' onClick={setCar.bind(this, id)}>
            <div className="option-image">
                <div className={`image-warp ${selected}`}>
                    <img
                        src={require(`../../../assets/img/${imgUrl}.svg`).default}
                        alt={label}
                    />
                    <div style={{ marginTop: '10px', bottom: '5px' }}>
                        <img src={doller} alt={label} style={{ width: 20, height: 21, position: 'absolute', }} />
                        <span style={{
                            position: 'relative', fontSize: 18,
                            fontWeight: 'bold', color: ' #747d8c', marginLeft: 30
                        }}>{cost}</span>
                    </div>
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

const SelectHouse = ({ label, imgUrl, cost, points, id, house, setHouse }) => {
    const selected = house === id ? 'selected' : ''
    return (
        <div className='option-wrap' onClick={setHouse.bind(this, id)} >
            <div className="option-image">
                <div className={`image-warp ${selected}`}>
                    <img
                        src={require(`../../../assets/img/${imgUrl}.svg`).default}
                        alt={label}
                        style={{ width: 150, height: 100 }}
                    />
                    <div>
                        <img src={doller} style={{ width: 20, height: 21, position: 'absolute', }} />
                        <span style={{
                            position: 'relative', fontSize: 18,
                            fontWeight: 'bold', color: ' #747d8c', marginLeft: 30
                        }}>{cost}</span>
                    </div>
                </div>
            </div>
            <div className="option-label">{label}</div>
        </div>
    )
}

function SelectDreams() {

    // const [dreams, setDreams] = useState({
    //     dream: 'visiting',
    //     cost: 3000,
    //     points: 0,
    // });
    // const [cars, setCars] = useState({
    //     car: 'relisibleCar',
    //     cost: 60000,
    //     points: 0,
    // });
    // const [houses, setHouses] = useState({
    //     house: 'studioApt',
    //     cost: 1200000,
    //     points: 0,
    // });

    const [dream, setDream] = useState('visiting')
    // const [dreamCost, setDreamCost] = useState(3000)
    const [car, setCar] = useState('relisibleCar')
    // const [carCost, setCarCost] = useState(60000)
    const [house, setHouse] = useState('studioApt')
    // const [houseCost, setHouseCost] = useState(1200000)

    const allyProps = { dream, setDream }
    const restCar = { car, setCar }
    const restHouse = { house, setHouse }

    const history = useHistory();

    const initialValues = {
        dream: dream,
        car: car,
        house: house,
    }

    const goToDashboard = (initialValues) => {
        console.log(initialValues)
        history.push(commonRoute.dashBoard)
    }

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
                    cost={3000}
                    // points={2000}
                    {...allyProps}
                />
                <SelectDream
                    label="Travel To Abroad"
                    imgUrl={`Flight`}
                    id={'flight'}
                    cost={5000}
                    // points={2000}
                    {...allyProps}
                />
                <SelectDream
                    label="Hill Station"
                    imgUrl={'HillStation'}
                    id={'hillStation'}
                    cost={6000}
                    // points={2000}
                    {...allyProps}
                />
                <SelectDream
                    label="Visit Beach"
                    imgUrl={`Beach`}
                    id={'beach'}
                    cost={1000}
                    // points={2000}
                    {...allyProps}
                />
                <SelectDream
                    label="Long Ride"
                    imgUrl={'BikeRide'}
                    id={'bikeRide'}
                    cost={1000}
                    // points={2000}
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
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Economy Car"
                    imgUrl={`EconomyCar`}
                    id={'economyCar'}
                    cost={70000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Fully Loaded Car"
                    imgUrl={'FullLoadCar'}
                    id={'fullLoadCar'}
                    cost={80000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Luxury Car"
                    imgUrl={'LuxuryCar'}
                    id={'luxuryCar'}
                    cost={90000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Speedster Car"
                    imgUrl={`SpeedsterCar`}
                    id={'speedsterCar'}
                    cost={100000}
                    // points={2000}
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
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Fixer Upper"
                    imgUrl={`FixerUp`}
                    id={'fixerUp'}
                    cost={1300000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Rambler"
                    imgUrl={'Rambler'}
                    id={'rambler'}
                    cost={1400000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Mansion"
                    imgUrl={`Mansion`}
                    id={'mansion'}
                    cost={1500000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Chateau"
                    imgUrl={'Chateau'}
                    id={'chateau'}
                    cost={1600000}
                    // points={2000}
                    {...restHouse}
                />
            </Grid>

            <div className="btn-wrap">
                <Button className="nxt-btn" onClick={() => goToDashboard(initialValues)}>Next</Button>
            </div>
        </Grid>
    )
}

export default SelectDreams