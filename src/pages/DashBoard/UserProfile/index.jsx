import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import './style.scss'
import UploadBtn from '../../../components/UploadButton'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import { API } from '../../../config/apis'
import Fetch from '../../../Api'
import { setNewGame } from '../../../redux/Action'
import { useDispatch } from 'react-redux'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

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


    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }







    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

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
                    <div className="btn-wrap">
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
                    <div className="btn-wrap" onClick={handleOpen}>
                        <div>Change</div>
                    </div>
                </Grid>
            </Grid>
            <div className="nav-btn-wrap">
                <Button className="new-btn" onClick={goToNewGame}>New Game</Button>
                <Button className="quit-btn" onClick={goToNewGame}>Quit Game</Button>
            </div>

            {open && (
                <Dialog open={open} onClose={handleClose} aria-labelledby="update-password">
                    <DialogTitle id="update-password">Update Password</DialogTitle>
                    <DialogContent>
                        {/* <TextField
                            label="Old Password"
                            name="oldPassword"
                            id="oldPassword"
                            fullWidth
                        /> */}
                        <TextField
                            label="New Password"
                            name="newPassword"
                            id="newPassword"
                            fullWidth
                        />
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            id="confirmPassword"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Grid>
    )
}

export default UserProfile
