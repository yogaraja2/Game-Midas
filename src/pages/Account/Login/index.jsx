import React from 'react'
import { Button } from '@material-ui/core'
import { FormTextfield } from '../../../components/FormField'
import { useForm } from 'react-hook-form'
import LinkButton from '../../../components/LinkButton'
import './style.scss'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'
import { getOriginPath } from '../../../utils/commonFunctions'

function Login() {
  const { control, errors, handleSubmit } = useForm()
  const history = useHistory()

  const handleLogin = (values) => {
    console.log(values)
    history.push(commonRoute.home)
  }

  const goToSignup = () => {
    history.push(`${getOriginPath(commonRoute.account)}/signup`)
  }

  const allyProps = { control, error: errors }

  return (
    <div className="login-box-sec">
      <div className="header-sec">
        <h3 className="main-head">Welcome to Midas</h3>
        <div className="sign-up-sec">
          <div className="cont">new Here?</div>
          <LinkButton className="create-btn" onClick={goToSignup}>Create an Account</LinkButton>
        </div>
      </div>

      <form className="field-wrap" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-field">
          <div className="label">Email Id</div>
          <FormTextfield
            className="email-field"
            name="email"
            placeholder="johnsmith@abc.com"
            rules={{
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            }}
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <div className="label psswd-ctrl">
            <div className="psswd-label">Password</div>
            <LinkButton className="forget-psswd-btn">
              Forgot Password?
            </LinkButton>
          </div>
          <FormTextfield
            className="pswd-field"
            name="password"
            type="password"
            placeholder="********"
            rules={{ required: 'Please enter your password' }}
            {...allyProps}
          />
        </div>

        <div className="form-btns">
          <Button type="submit" className="signin-btn">Login</Button>
          <span className="cont">or</span>
          <LinkButton className="signup-btn" onClick={goToSignup}>Signup</LinkButton>
        </div>
      </form>
    </div>
  )
}

export default Login
