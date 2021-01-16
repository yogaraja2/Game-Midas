import React, { useEffect, useState } from 'react'
import { FormDropdown, FormTextfield } from '../../../components/FormField'
import { Button } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { commonRoute } from '../../../config/routes'
import './styles.scss'
import API, { URL } from '../../../Api'
import { useSelector, connect } from 'react-redux'
import SnackBar from '../../../components/SnackBar'

function SelectRole() {
    // useSelector hook is used for get state from reducers. a.k.a: Receiver page
    // const getApiData = useSelector(state => state.signupData)
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

    const [organizations, setOrganizations] = useState([])
    const [instructors, setInstructors] = useState([])

    const [role, setRole] = useState(null)
    const [organizationId, setOrganizationId] = useState(null)
    const [instructorId, setInstructorId] = useState(null)
    const [newOrganization, setNewOrganization] = useState('')
    const [subscription, setSubscription] = useState(null)

    const defaultValues = {
        role,
        organizationId,
        instructorId,
        newOrganization,
        subscription,
    }

    useEffect(() => {
        console.log('test0')
        setOrganizations(JSON.parse(localStorage.getItem('Organizations')))
        setInstructors(JSON.parse(localStorage.getItem('Instructors')))
        // console.log('organizations '+organizations)
        // console.log('Instructors '+instructors)
        if (role === 'Individual') {
            setOrganizationId(null)
            setInstructorId(null)
            setNewOrganization('')
            setSubscription(null)
        }
        else if (role === 'Student') {
            setNewOrganization('')
            setSubscription(null)
        }
        else if (role === 'Instructor') {
            setInstructorId(null)
            setNewOrganization('')
            setSubscription(null)
        }
        else {
            setOrganizationId(null)
            setInstructorId(null)
        }
    }, [role])


    // console.log('org id '+organizationId)

    const selectedOrg = organizations.filter((item) => item.id === organizationId)
    // console.log('selectedOrg ' + selectedOrg)

    let selectedInstructor = [];
    if (selectedOrg.length) {
        // console.log('tenant ' + selectedOrg[0].tenant_key)
        selectedInstructor = instructors.filter((item) => item.tenant_key === selectedOrg[0].tenant_key)
        // console.log('selectedInstructor ' + selectedInstructor)
    }

    const [message, setMessage] = useState(null)
    const [Error, setError] = useState(false)
    const [detail, setDetail] = useState(null)
    const [response, setResponse] = useState(null)
    const [count, setCount] = useState(false)

    const { control, errors, handleSubmit } = useForm(defaultValues)
    const history = useHistory()

    const otherProps = { control, error: errors }

    const token = localStorage.getItem('midasToken')
    const auth = 'Bearer '.concat(token)

    const onSubmitHandler = (values) => {
        console.log('entry')
        console.log(values)

        API.post(URL.userprofile, values, {
            headers: {
                Authorization: auth
            }
        })
            .then((res) => {
                console.log('res entry')
                console.log(res)
                const { data } = res;
                setResponse(res)
                setCount(true)

                if (res?.status === 200) {
                    setMessage('Submitted Successfully...')
                }
            })
            .catch((err) => {
                setMessage(err.message)
                // setDefaultValues({})
                setCount(true)
            })
        // .finally(() => {
        //     setDefaultValues({})
        // })
    }

    useEffect(() => {
        if (count) {
            if (response) {
                setError(true)
                setCount(false)
            } else {
                setError(true)
                setCount(false)
                setMessage('Something went wrong')
            }
        }
    }, [response, count])

    function handleOnClose(reason) {
        if (reason === 'clickaway') {
            return
        }
        if (response?.status === 200) {
            history.push(commonRoute.gameOptions)
        }
        setError(false)
    }

    console.log('default')
    console.log(defaultValues)

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
                        id="organizationId"
                        name="organizationId"
                        className="organizations-field"
                        label="Choose the organization"
                        list={organizations}
                        onChange={(e) => setOrganizationId(e.target.value)}
                        placeholder="Select"
                        rules={(role === 'Student' || role === 'Instructor') && { required: 'Please select your school' }}
                        disabled={!(role === 'Student' || role === 'Instructor') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormDropdown
                        id="instructorId"
                        name="instructorId"
                        className="instructor-field"
                        label="Choose Your Instructor (Optional)"
                        list={selectedInstructor ? selectedInstructor : instructors}
                        onChange={(e) => setInstructorId(e.target.value)}
                        placeholder="Select"
                        // rules={(role === 'Student') && { required: 'Please select your instructor' }}
                        disabled={!(role === 'Student') ? true : false}
                        {...otherProps}
                    />
                </div>
                <div className="form-field">
                    <FormTextfield
                        id="newOrganization"
                        name="newOrganization"
                        label="Create Organization"
                        placeholder="enter organization name"
                        required
                        onChange={(e) => setNewOrganization(e.target.value)}
                        rules={(role === 'School_Admin') && { required: 'Please enter organization name' }}
                        disabled={!(role === 'School_Admin') ? true : false}
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
                        onChange={(e) => setSubscription(e.target.value)}
                        rules={(role === 'School_Admin') && { required: 'Please select subscription period' }}
                        disabled={!(role === 'School_Admin') ? true : false}
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
