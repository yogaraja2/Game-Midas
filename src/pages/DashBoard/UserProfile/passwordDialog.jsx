import React, { useState } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

function PasswordDialog({ isOpen, isClose }) {

    const [open, setOpen] = useState(isOpen)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="update-password">
            <DialogTitle id="update-password">Update Password</DialogTitle>
            <DialogContent>
                <TextField
                    label="Old Password"
                    name="oldPassword"
                    id="oldPassword"
                    fullWidth
                />
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
    )
}

export default PasswordDialog
