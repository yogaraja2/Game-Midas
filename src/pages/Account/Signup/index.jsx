import { Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import {
  FormCheckBox,
  FormTextfield
} from '../../../components/FormField'
import LinkButton from '../../../components/LinkButton'
import SnackBar from '../../../components/SnackBar'
import { commonRoute } from '../../../config/routes'
import { getOriginPath } from '../../../utils/commonFunctions'
import './style.scss'
import API, { URL } from '../../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { setResponseData } from '../../../action'

function Signup() {

  const ApiResponse = useSelector(state => state.signupData)
  useEffect(() => {
    console.log('from signup')
    console.log(ApiResponse)
  }, [ApiResponse])

  const dispatch = useDispatch()

  const defaultValues = {
    username: '',
    gmail: '',
    password: '',
    confirmPassword: '',
    // isAgreed: false
  }
  const { register, watch, control, errors, handleSubmit } = useForm(defaultValues)
  const history = useHistory()

  const validationErr = {
    name: 'Invalid name',
    gmail: 'Invalid mail address',
    passwordValidation: 'Password must contain alphaNumeric',
    passwordLength: 'Required password length 8 to 20 letters',
  }

  const allyProps = { control, error: errors }

  const [message, setMessage] = useState(null)
  const [Error, setError] = useState(false)
  const [detail, setDetail] = useState(null)
  const [response, setResponse] = useState(null)
  const [count, setCount] = useState(false)

  const handleSignup = (data) => {
    // console.log(data)
    if (data.password !== data.confirmPassword) {
      console.log('wrong password')
      setMessage("Incorrect password, please enter valid password")
      setError(true)
    }
    else {
      // console.log('correct password')
      API.post(URL.signup, data)
        .then((res) => {
          console.log('response below')
          console.log(res)
          const { data } = res
          dispatch(setResponseData(data)) // dispatching action to store a.k.a: Provider page
          setResponse(data)
          setCount(true)

          if (data.token) {
            localStorage.setItem('midasToken', data.token)
            localStorage.setItem('userId', data.id)
            localStorage.setItem('userName', data.username)
            localStorage.setItem('Organizations', JSON.stringify(data.organizations.map((item, index) => ({ id: item.id, value: item.organizationName, tenant_key: item.tenant_key }))),
              localStorage.setItem('Instructors', JSON.stringify(data.instructors.map((item, index) => ({ id: item.id, value: item.username, tenant_key: item.tenant_key })))))
            setMessage('Thanks! Your account has been created successfully')
            setDetail(data)
            setError(true)
          }
          // else if (data?.user.update === 'updated password') {
          //   setError(true)
          //   setMessage('Created successfully...Please do signin')
          // } 
          else if (data.status) {
            setError(true)
            setMessage(data.message)
            // setMessage("Testing")
          }
        })
        .catch((err) => {
          console.log('error section')
          console.log(err)
          setMessage(err.message)
          setCount(true)
        })
    }
  }

  useEffect(() => {
    if (count) {
      if (response) {
        setError(true)
        setCount(false)
      } else {
        setError(true)
        setMessage('Something went Wrong')
        setCount(false)
      }
    }
  }, [response, count])

  function handleOnClose(reason) {
    if (reason === 'clickaway') {
      return
    }
    // if (message === 'Created successfully...Please do signin') {
    //   history.push(`${getOriginPath(commonRoute.account)}/login`)
    // }
    if (detail?.token) {
      history.push(`${getOriginPath(commonRoute.account)}/selectRole`)
    }
    setError(false)
  }

  return (
    <div className="signup-box-sec">
      <h1 className="signup-title">Sign-up</h1>
      <form className="field-wrap" onSubmit={handleSubmit(handleSignup)}>
        <div className="form-field">
          <FormTextfield
            className="user-name"
            label="Username"
            name="username"
            placeholder="Midas"
            onChange={(e) => e.target.value}
            rules={{
              required: 'Please enter username',
              minLength: {
                value: 3,
                message: validationErr.name
              },
              pattern: {
                value: /^[A-Za-z]*$/,
                message: validationErr.name
              }
            }}
            error={errors.username && errors.username.message}
            hasValidation
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <FormTextfield
            className="gmail-field"
            name="gmail"
            label="E-Mail"
            placeholder="midas123@gmail.com"
            onChange={(e) => e.target.value}
            rules={{
              required: 'Please enter your gmail',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: validationErr.gmail
              }
            }}
            error={errors.gmail && errors.gmail.message}
            hasValidation
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <FormTextfield
            className="pswd-field"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            onChange={(e) => e.target.value}
            rules={{
              required: 'Please enter your password',
              minLength: {
                value: 8,
                message: validationErr.passwordLength
              },
              maxLength: {
                value: 20,
                message: validationErr.passwordLength
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
                message: validationErr.passwordValidation
              }
            }}
            error={errors.password && errors.password.message}
            hasValidation
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <FormTextfield
            className="pswd-field"
            label="Repeat Password"
            name="confirmPassword"
            type="password"
            placeholder="********"
            onChange={(e) => e.target.value}
            rules={{
              required: 'Please enter your password',
              minLength: {
                value: 6,
                message: validationErr.passwordLength
              },
              maxLength: {
                value: 12,
                message: validationErr.passwordLength
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
                message: validationErr.passwordValidation
              }
            }}
            error={errors.confirmPassword && errors.confirmPassword.message}
            {...allyProps}
          />
        </div>

        {/* <div className="form-field">
          <div className="signup-terms">
            <FormCheckBox
              name="isAgreed"
              className="terms-checkbox"
              rules={{ required: 'Need to agree to the terms to continue' }}
              error={!!errors.isAgreed && errors.isAgreed.message}
              control={control}
            />
            <span className="term-cont">By Signing up I Agree with</span>
            <LinkButton className="terms-link">Terms and Conditions</LinkButton>
          </div>
          {errors?.isAgreed?.message && (
            <div className="err-msg">{errors?.isAgreed?.message}</div>
          )}
        </div> */}

        <div className="form-btns">
          <Button type="submit" className="signin-btn">
            Signup
          </Button>
          <span className="cont">or</span>
          <LinkButton
            className="signup-btn"
            onClick={() =>
              history.push(`${getOriginPath(commonRoute.account)}/login`)
            }
          >
            Login
          </LinkButton>
        </div>
      </form>
      {response && response.token && (
        <SnackBar
          openDialog={Error}
          message={message}
          onclose={handleOnClose}
          severity={'success'}
        />
      )}
      {response && response.update && (
        <SnackBar
          openDialog={Error}
          message={message}
          onclose={handleOnClose}
          severity={'success'}
        />
      )}
      {response && response.status && (
        <SnackBar
          openDialog={Error}
          message={message}
          onclose={handleOnClose}
          severity={'info'}
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

export default Signup
