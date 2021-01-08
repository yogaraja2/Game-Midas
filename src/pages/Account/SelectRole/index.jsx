import React, { useEffect, useState } from 'react'
import { FormDropdown } from '../../../components/FormField'
import Textfield from '../../../components/Textfield'
import { Button } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { commonRoute } from '../../../config/routes'
import './styles.scss'
import API, { URL } from '../../../Api'
import { useSelector, connect } from 'react-redux'
import SnackBar from '../../../components/SnackBar'

function SelectRole() {

    const getApiData = useSelector(state => state.signupData)

    const [tempInstructors, setTempInstructors] = useState(null)
    const [tempOrganizations, setTempOrganizations] = useState(null)
    const [instructors, setInstructors] = useState(null)
    const [organizations, setOrganizations] = useState(null)

    useEffect(() => {
        console.log('from 2nd page')
        console.log(getApiData)
        setTempInstructors(getApiData.instructors);
        setTempOrganizations(getApiData.organizations);

        if (tempInstructors) {
            setInstructors(tempInstructors.map((item, index) => ({ id: item.id, value: item.username, tenant_key: item.tenant_key })));
        }
        if (tempOrganizations) {
            setOrganizations(tempOrganizations.map((item, index) => ({ id: item.id, value: item.organizationName, tenant_key: item.tenant_key })));
        }

    }, [getApiData, tempInstructors, tempOrganizations])

    console.log('instructor')
    console.log(instructors)

    console.log('organization')
    console.log(organizations)

    const defaultValues = {
        role: '',
        organizations: {},
        instructors: {},
        newOrganization: '',
        subscription: '',
    }

    const roleOptions = [
        { id: 'Individual', value: 'Individual' },
        { id: 'Student', value: 'Student' },
        { id: 'Instructor', value: 'Instructor' },
        { id: 'School_Admin', value: 'School Admin' }
    ]

    const subscriptionPeriod = [
        { id: 1, value: '1 Year' },
        { id: 2, value: '2 Year' },
        { id: 3, value: '3 Year' },
    ]

    const [message, setMessage] = useState(null)
    const [Error, setError] = useState(false)
    const [detail, setDetail] = useState(null)
    const [response, setResponse] = useState(null)
    const [count, setCount] = useState(false)

    const [role, setRole] = useState(defaultValues.role)

    const { control, errors, handleSubmit } = useForm({ defaultValues })
    const history = useHistory()

    const otherProps = { control, error: errors }

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    const onSubmitHandler = (values) => {
        console.log('entry')
        console.log(values)
        // history.push(commonRoute.gameOptions)

        API.post(URL.userprofile, values,{
            headers:{
                Authorization : auth
            }
        })
            .then((res) => {
                console.log('res entry')
                console.log(res)
                const { data } = res;
                setResponse(data)
                setCount(true)

                if (data) {
                    setDetail(data)
                    setMessage('Role Selected Successfully')
                    // history.push(commonRoute.gameOptions)
                }
            })
            .catch((err) => {
                console.log('error section')
                console.log(err)
                setMessage(err.message)
                setCount(true)
            })
    }

    useEffect(() => {
        if (count) {
            if (response) {
                setError(true)
                setCount(false)
            } else {
                setError(true)
                setCount(false)
                // setMessage('Something went wrong')
            }
        }
    }, [response, count])

    function handleOnClose(reason) {
        if (reason === 'clickaway') {
            return
        }
        if (detail) {
            history.push(commonRoute.gameOptions)
        }
        setError(false)
    }

    return (
        <div className="role-box-sec">
            <h1 className="title">Select Your Role</h1>
            <form className="field-wrap" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="form-field">
                    <FormDropdown
                        id="role"
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
                        id="organizations"
                        name="organizations"
                        value="organizationName"
                        className="organizations-field"
                        label="Choose the organization"
                        list={organizations}
                        placeholder="Select"
                        onChange={(e) => e.target.value}
                        rules={(role === 'student' || role === 'instructor') && { required: 'Please select your school' }}
                        disabled={!(role === 'student' || role === 'instructor') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormDropdown
                        id="instructors"
                        name="instructors"
                        value="username"
                        className="instructor-field"
                        label="Choose Your Instructor (Optional)"
                        list={instructors}
                        placeholder="Select"
                        onChange={(e) => e.target.value}
                        // rules={(role === 'student') && { required: 'Please select your instructor' }}
                        disabled={!(role === 'student') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <Textfield
                        id="newOrganization"
                        name="newOrganization"
                        label="Create Organization"
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
                        id="subscription"
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
            {response && response.status && (
                <SnackBar
                    openDialog={Error}
                    message={message}
                    onclose={handleOnClose}
                    severity={'success'}
                />
            )}
            {!response && (
                <SnackBar
                    openDialog={Error}
                    message={message}
                    onclose={handleOnClose}
                    severity={'error'}
                />
            )}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         response: state.response
//     }
// }

export default SelectRole
