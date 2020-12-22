import React from 'react'
import { Button, Grid } from '@material-ui/core'
import LinkButton from '../../components/LinkButton'
import { useForm } from 'react-hook-form'
import { FormTextfield } from '../../components/FormField'
import './style.scss'

function Login() {
  const { control, errors, handleSubmit } = useForm()

  const handleLogin = (values) => {
    console.log(values)
  }

  const allyProps = { control, error: errors }

  return (
    <Grid container className="login-wrapper">
      <Grid item xs={12} sm={2} md={4} className="login-splash-sec">
        <div className="login-splash"></div>
      </Grid>

      <Grid item xs={12} sm={10} md={8} className="login-box-sec">
        <div className="login-box-wrap">
          <div className="header-sec">
            <h3 className="main-head">Welcome to Midas</h3>
            <div className="sign-up-sec">
              <div className="cont">new Here?</div>
              <LinkButton className="create-btn">Create an Account</LinkButton>
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
              <Button className="signin-btn">Login</Button>
              <span>or</span>
              <LinkButton className="signup-btn">Signup</LinkButton>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login
