import React from 'react'
import Popup from '../../../components/Popup'

function passwordPopup() {
    return (
        <Popup>
            <div>
                <label htmlFor="currentPassword">Current Password</label>
                <input type="text" name="currentPassword"></input>
                <label htmlFor="newPassword">Enter Password</label>
                <input type="text" name="newPassword"></input>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="text" name="confirmPassword"></input>

                <div>
                    <button>Update</button>
                </div>
            </div>
        </Popup>
    )
}

export default passwordPopup
