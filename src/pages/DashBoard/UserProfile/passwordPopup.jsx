import React from 'react'
import Popup from '../../../components/Popup'
import { TextField } from '@material-ui/core'

function passwordPopup({ onClose }) {
    return (
        <Popup
            className="changePassword"
            onClose={onClose}
            noClose
        >
            <div className="password-fields-wrap">
                <TextField
                    label="Current Password"
                    name="currentPassword"
                />
                <TextField
                    label="New Password"
                    name="newPassword"
                />
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                />
            </div>

        </Popup>
    )
}

export default passwordPopup