import { Button } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import {
  FormCheckBox,
  FormDropdown,
  FormTextfield
} from '../../../components/FormField'
import LinkButton from '../../../components/LinkButton'
import { commonRoute } from '../../../config/routes'
import { getOriginPath } from '../../../utils/commonFunctions'
import './style.scss'

function Signup() {
  const roleOptions = [
    { id: 'individual', value: 'Individual' },
    { id: 'group', value: 'Group' }
  ]
  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      retypePass: '',
      role: roleOptions[0].id,
      isAgreed: false
    }
  })
  const history = useHistory()

  const handleSignup = (values) => {
    console.log(values)
    history.push(commonRoute.home)
  }

  const allyProps = { control, error: errors }

  return (
    <div className="signup-box-sec">
      <h1 className="signup-title">Sign-up</h1>

      <form className="field-wrap" onSubmit={handleSubmit(handleSignup)}>
        <div className="form-field">
          <FormTextfield
            className="email-field"
            name="email"
            label="E-Mail"
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
          <FormTextfield
            className="pswd-field"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            rules={{ required: 'Please enter your password' }}
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <FormTextfield
            className="pswd-field"
            label="Repeat Password"
            name="retypePass"
            type="password"
            placeholder="********"
            rules={{ required: 'Please confirm your password' }}
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <FormDropdown
            name="role"
            className="role-field"
            label="Choose the Role"
            list={roleOptions}
            rules={{ required: 'Please select your role' }}
            {...allyProps}
          />
        </div>

        <div className="form-field">
          <div className="signup-terms">
            <FormCheckBox
              name="isAgreed"
              className="terms-checkbox"
              rules={{ required: 'Need to agree to the terms to continue' }}
              control={control}
            />
            <span className="term-cont">By Signing up I Agree with</span>
            <LinkButton className="terms-link">Terms and Conditions</LinkButton>
          </div>
          {errors?.isAgreed?.message && (
            <div className="err-msg">{errors?.isAgreed?.message}</div>
          )}
        </div>

        <div className="form-btns">
          <Button type="submit" className="signin-btn">
            Next
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
    </div>
  )
}

export default Signup
