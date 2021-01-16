import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'
import doller from '../../../assets/img/doller 2.svg'
import pointIcon from '../../../assets/img/pointsIcon.svg'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import API, { URL } from '../../../Api'

const SelectDream = ({ label, imgUrl, cost, points, id, dreams, setDreams }) => {

    const dreamHandler = () => {
        setDreams.bind(this, id)
        setDreams({ dream: id, cost: cost })
    }
    const selected = dreams.dream === id ? 'selected' : '';
    // console.log('dreams')
    // console.log(dreams)
    return (
        <div className="option-wrap" onClick={dreamHandler}>
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

const SelectCar = ({ label, imgUrl, cost, points, id, cars, setCars }) => {

    const carsHandler = () => {
        setCars.bind(this, id)
        setCars({ car: id, cost: cost })
    }
    const selected = cars.car === id ? 'selected' : ''

    return (
        <div className='option-wrap' onClick={carsHandler}>
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

const SelectHouse = ({ label, imgUrl, cost, points, id, houses, setHouses }) => {

    const houseHandler = () => {
        setHouses.bind(this, id)
        setHouses({ house: id, cost: cost })
    }
    const selected = houses.house === id ? 'selected' : ''
    return (
        <div className='option-wrap' onClick={houseHandler} >
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

    const [dreams, setDreams] = useState({
        dream: 'visiting',
        cost: 3000,
    });
    const [cars, setCars] = useState({
        car: 'relisibleCar',
        cost: 60000,
    });
    const [houses, setHouses] = useState({
        house: 'studioApt',
        cost: 1200000,
    });

    const restDream = { dreams, setDreams }
    const restCar = { cars, setCars }
    const restHouse = { houses, setHouses }

    const history = useHistory();

    const initialValues = {
        dreams: dreams,
        cars: cars,
        houses: houses,
    }

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    const goToDashboard = (initialValues) => {
        console.log(initialValues)
        history.push(commonRoute.dashBoard)

        // API.post(URL.dreamsDetails, initialValues, {
        //     headers: {
        //         Authorization: auth
        //     }
        // })
        //     .then((res) => {
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
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
                    {...restDream}
                />
                <SelectDream
                    label="Travel To Abroad"
                    imgUrl={`Flight`}
                    id={'flight'}
                    cost={5000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Hill Station"
                    imgUrl={'HillStation'}
                    id={'hillStation'}
                    cost={6000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Visit Beach"
                    imgUrl={`Beach`}
                    id={'beach'}
                    cost={1000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Long Ride"
                    imgUrl={'BikeRide'}
                    id={'bikeRide'}
                    cost={1000}
                    // points={2000}
                    {...restDream}
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