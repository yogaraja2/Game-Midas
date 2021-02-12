import React, { useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { commonRoute } from '../../../config/routes'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'
import './style.scss'


const Options = ({ label, imgUrl, id, selected, setSelected }) => {
    return (
        <div
            className={clsx('option-wrap', { selected: selected === id })}
            onClick={setSelected.bind(this, id)}
        >
            <div className="option-label">{label}</div>
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
        </div>
    )
}

function Home() {

    const [selected, setSelected] = useState('instructors')

    const allyProps = { selected, setSelected }
    const history = useHistory()

    const clickHandler = () => {
        if (selected === 'leaderboard') {
            history.push(commonRoute.schoolAdminLogin.studentsLeaderboard)
        } else {
            history.push(commonRoute.schoolAdminLogin.instructorsList)
        }
    }

    return (
        <Grid item xs={11} md={10} className="home-option-card">
            <Grid
                container
                justify="space-around"
                alignContent="center"
                className="options-selector"
            >
                <Options
                    label="Students LeaderBoard"
                    imgUrl={`Leader-Board`}
                    id="leaderboard"
                    {...allyProps}
                />
                <Options
                    label="Instructors List"
                    imgUrl={`Students`}
                    id="instructors"
                    {...allyProps}
                />

            </Grid>
            <div className="btn-wrap">
                <Button className="nxt-btn" onClick={clickHandler}>
                    Next
                </Button>
            </div>
        </Grid>
    )
}

export default Home
