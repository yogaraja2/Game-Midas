import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'
import { Button } from '@material-ui/core'
import UploadBtn from '../../../components/UploadButton'
import clsx from 'clsx'
import passwordPopup from './passwordPopup'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import { API } from '../../../config/apis'
import Fetch from '../../../Api'
import { setNewGame } from '../../../redux/Action'
import { useDispatch } from 'react-redux'

function UserProfile() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [gameLength, setGameLength] = useState(10)

    const SelectLength = ({ id, name, gameLength, setGameLength }) => {

        return (
            <div className={clsx(gameLength === id && 'selected')} onClick={setGameLength.bind(this, id)}>
                {name}
            </div>
        )
    }
    const other = { gameLength, setGameLength }

    // const showPopup = () => {
    //     return (
    //         <passwordPopup />
    //     )
    // }

    const [confDlg, setConfDlg] = useState(false)

    const handleClick = () => {
        setConfDlg(true)
    }

    const handleDlgClose = () => {
        setConfDlg(false)
    }

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    const goToMainDash = () => {
        history.push(commonRoute.dashboard.mainDash)
    }
    const goToNewGame = () => {
        Fetch.get(API.gamePlay.cashFlow.newGame, {
            headers: {
                Authorization: auth
            }
        })
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    dispatch(setNewGame())
                    history.push(commonRoute.gameOptions)
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <Grid item xs={12} md={10} className="user-profile-root">
            <Grid item xs={12} className="select-wrap-card">
                <Grid container className="select-wrap">
                    <h2 className="title">Avatar</h2>
                    <div className="btn-wrap" onClick={handleClick}>
                        <div>Change</div>
                    </div>
                    {/* <UploadBtn
                    label="Change"
                    variant="outlined"
                    component="span"  //for file uploading
                /> */}
                </Grid>
                <Grid container className="select-wrap">
                    <h2 className="title">Game Length</h2>
                    <div className="btn-wrap">
                        <SelectLength
                            className="btn-field"
                            id={10}
                            name="Short"
                            {...other}
                        />
                        <SelectLength
                            id={20}
                            name="Medium"
                            {...other}
                        />
                        <SelectLength
                            id={40}
                            name="Long"
                            {...other}
                        />
                    </div>
                </Grid>
                <Grid container className="select-wrap">
                    <h2 className="title">Password</h2>
                    <div className="btn-wrap" onClick={handleClick}>
                        <div>Change</div>
                    </div>
                </Grid>
            </Grid>
            <div className="nav-btn-wrap">
                <Button className="btn" onClick={goToMainDash}>Back</Button>
                <Button className="btn" onClick={goToNewGame}>Quit Game</Button>
            </div>

            {confDlg && (<passwordPopup onClose={handleDlgClose} />)}
        </Grid>
    )
}

export default UserProfile
