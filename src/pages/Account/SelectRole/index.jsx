import React, { useState } from 'react'
import { FormDropdown } from '../../../components/FormField'
import Textfield from '../../../components/Textfield'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { commonRoute } from '../../../config/routes'
import './styles.scss'

function SelectRole() {

    const roleOptions = [
        { id: 'individual', value: 'Individual' },
        { id: 'student', value: 'Student' },
        { id: 'instructor', value: 'Instructor' },
        { id: 'schoolAdmin', value: 'School Admin' }
    ]
    const schoolOptions = [
        { id: 'schoolA', value: 'School A' },
        { id: 'schoolB', value: 'School B' },
        { id: 'schoolC', value: 'School C' },
        { id: 'schoolD', value: 'School D' },
    ]
    const allInstructor = [
        { id: 'antony', value: 'Antony' },
        { id: 'bairstow', value: 'Bairstow' },
        { id: 'christober', value: 'Christober' },
        { id: 'david', value: 'David' },
    ]
    const subscriptionPeriod = [
        { id: 'one', value: '1 Year' },
        { id: 'two', value: '2 Year' },
        { id: 'three', value: '3 Year' },
    ]

    const defaultValues = {
        role: '',
        school: '',
        instructor: '',
        organization: '',
        subscription: '',
    }

    const [role, setRole] = useState(defaultValues.role)

    const { control, errors, handleSubmit } = useForm({ defaultValues })
    const history = useHistory()

    const otherProps = { control, error: errors }

    const onSubmitHandler = (values) => {
        console.log(values)
        history.push(commonRoute.gameOptions)
    }

    return (
        <div className="role-box-sec">
            <h1 className="title">Select Your Role</h1>
            <form className="field-wrap" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-field">
                    <FormDropdown
                        name="role"
                        className="role-field"
                        label="Choose the Role"
                        list={roleOptions}
                        placeholder="Select"
                        autoFocus
                        onChange={(e) => setRole(e.target.value)}
                        rules={{ required: 'Please select your role' }}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormDropdown
                        name="school"
                        className="school-field"
                        label="Choose the School"
                        list={schoolOptions}
                        placeholder="Select"
                        onChange={(e) => e.target.value}
                        rules={(role === 'student' || role === 'instructor') && { required: 'Please select your school' }}
                        disabled={!(role === 'student' || role === 'instructor') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormDropdown
                        name="instructor"
                        className="instructor-field"
                        label="Choose Your Instructor (Optional)"
                        list={allInstructor}
                        placeholder="Select"
                        onChange={(e) => e.target.value}
                        rules={(role === 'student') && { required: 'Please select your instructor' }}
                        disabled={!(role === 'student') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <Textfield
                        id="organization"
                        name="organization"
                        label="Organization name"
                        placeholder="enter organization name"
                        required
                        onChange={(e) => e.target.value}
                        rules={(role === 'schoolAdmin') && { required: 'Please enter organization name' }}
                        disabled={!(role === 'schoolAdmin') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormDropdown
                        name="subscription"
                        className="subscription-field"
                        label="Choose subscription period"
                        list={subscriptionPeriod}
                        placeholder="Select"
                        onChange={(e) => e.target.value}
                        rules={(role === 'schoolAdmin') && { required: 'Please select subscription period' }}
                        disabled={!(role === 'schoolAdmin') ? true : false}
                        {...otherProps}
                    />
                </div>

                <div className="form-btns">
                    <Button type="submit" className="signin-btn">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SelectRole
