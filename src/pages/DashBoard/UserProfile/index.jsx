import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'
import { Button } from '@material-ui/core'
import UploadBtn from '../../../components/UploadButton'
import clsx from 'clsx'
import passwordPopup from './passwordPopup'


function UserProfile() {

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

    return (
        <Grid item xs={12} md={10} className="user-profile-root">
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
            {confDlg && (<passwordPopup onClose={handleDlgClose} />)}
        </Grid>
    )
}

export default UserProfile
