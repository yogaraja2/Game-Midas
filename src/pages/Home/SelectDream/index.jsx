import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import clsx from 'clsx'
import './style.scss'
import doller from '../../../assets/img/doller 2.svg'
import pointIcon from '../../../assets/img/pointsIcon.svg'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import API, { URL } from '../../../Api'

const SelectDream = ({ label, imgUrl, cost, points, name, id, dreams, setDreams }) => {

    const dreamHandler = () => {
        // setDreams.bind(this, id)
        setDreams({ id: id, dreamName: name, cost: cost })
    }
    const selected = dreams.id === id ? 'selected' : '';
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

const SelectCar = ({ label, imgUrl, cost, points, name, id, cars, setCars }) => {

    const carsHandler = () => {
        // setCars.bind(this, id)
        setCars({ id: id, carName: name, cost: cost })
    }
    const selected = cars.id === id ? 'selected' : ''

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

const SelectHouse = ({ label, imgUrl, cost, points, name, id, houses, setHouses }) => {

    const houseHandler = () => {
        // setHouses.bind(this, id)
        setHouses({ id: id, houseName: name, cost: cost })
    }
    const selected = houses.id === id ? 'selected' : ''
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
        id: 1,
        dreamName: 'visiting',
        cost: 3000,
    });
    const [cars, setCars] = useState({
        id: 1,
        carName: 'relisibleCar',
        cost: 60000,
    });
    const [houses, setHouses] = useState({
        id: 1,
        houseName: 'studioApt',
        cost: 1200000,
    });

    const restDream = { dreams, setDreams }
    const restCar = { cars, setCars }
    const restHouse = { houses, setHouses }

    const history = useHistory();

    const initialValues = {
        dream: dreams,
        car: cars,
        house: houses,
    }

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    const goToDashboard = (initialValues) => {
        console.log(initialValues)
        history.push(commonRoute.dashboard.default)

        API.post(URL.dreamSelection, initialValues, {
            headers: {
                Authorization: auth
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
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
                    id={1}
                    name="traveller"
                    cost={3000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Travel To Abroad"
                    imgUrl={`Flight`}
                    id={2}
                    name="flight"
                    cost={5000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Hill Station"
                    imgUrl={'HillStation'}
                    id={3}
                    name="hillStation"
                    cost={6000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Visit Beach"
                    imgUrl={`Beach`}
                    id={4}
                    name="beach"
                    cost={1000}
                    // points={2000}
                    {...restDream}
                />
                <SelectDream
                    label="Long Ride"
                    imgUrl={'BikeRide'}
                    id={5}
                    name="bikeRide"
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
                    id={1}
                    name="relisibleCar"
                    cost={60000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Economy Car"
                    imgUrl={`EconomyCar`}
                    id={2}
                    name="economyCar"
                    cost={70000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Fully Loaded Car"
                    imgUrl={'FullLoadCar'}
                    id={3}
                    name="fullLoadedCar"
                    cost={80000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Luxury Car"
                    imgUrl={'LuxuryCar'}
                    id={4}
                    name="luxuryCar"
                    cost={90000}
                    // points={2000}
                    {...restCar}
                />
                <SelectCar
                    label="Speedster Car"
                    imgUrl={`SpeedsterCar`}
                    id={5}
                    name="speedsterCar"
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
                    id={1}
                    name="studioApt"
                    cost={120000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Fixer Upper"
                    imgUrl={`FixerUp`}
                    id={2}
                    name="fixerUp"
                    cost={130000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Rambler"
                    imgUrl={'Rambler'}
                    id={3}
                    name="rambler"
                    cost={140000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Mansion"
                    imgUrl={`Mansion`}
                    id={4}
                    name="mansion"
                    cost={150000}
                    // points={2000}
                    {...restHouse}
                />
                <SelectHouse
                    label="Chateau"
                    imgUrl={'Chateau'}
                    id={5}
                    name="chateau"
                    cost={160000}
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