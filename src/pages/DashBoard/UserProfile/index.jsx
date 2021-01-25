import { Grid } from '@material-ui/core'
import React from 'react'
import './style.scss'
import { Button } from '@material-ui/core'
import UploadBtn from '../../../components/UploadButton'


function UserProfile() {
    return (
        <Grid item xs={12} md={10} className="user-profile-root">
            <Grid container className="select-wrap">
                <h2 className="title">Avatar</h2>
                <div className="btn-wrap">
                    <UploadBtn
                        label="Change"
                        variant="outlined"
                        component="span"
                    />
                </div>
            </Grid>
            <Grid container className="select-wrap">
                <h2 className="title">Game Length</h2>
                <div className="btn-wrap">
                    <Button>Short</Button>
                    <Button>Medium</Button>
                    <Button>Long</Button>
                </div>
            </Grid>
            <Grid container className="select-wrap">
                <h2 className="title">Password</h2>
                <div className="btn-wrap">
                    <Button>Change</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default UserProfile
