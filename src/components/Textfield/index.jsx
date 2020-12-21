import React from 'react'
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import { Cancel, Visibility, VisibilityOff } from '@material-ui/icons'
import './style.scss'

const Textfield = ({
  className,
  placeholder,
  label,
  value,
  name,
  type,
  onChange,
  setChange,
  prefix,
  suffix,
  clear,
  error,
  hasValidation,
  inputProps,
  defaultValue,
  ...rest
}) => {
  const [textType, setType] = React.useState(type || 'text')
  const labelStatus = !!label ? ' with-label' : ''
  const errorStatus = hasValidation ? ' with-error' : ''
  const disabledStatus = !!rest?.disabled ? ' is-disabled' : ''

  const handleClear = () => {
    !!onChange &&
      onChange({
        target: {
          name,
          value: ''
        }
      })

    !!setChange && setChange('')
  }

  const handleChange = (e) => {
    // if (textType === 'number') {
    //   const newValue =
    //     !!e.target?.value || e.target?.value === 0
    //       ? parseInt(e.target?.value.replace(/[^0-9]/g, ''))
    //       : null
    //   !!onChange && onChange(newValue)
    //   !!setChange && setChange(newValue)
    // } else {
    !!onChange && onChange(e)
    !!setChange && setChange(e.target.value)
  }

  const toggleType = () => {
    setType((prev) => (prev === 'text' ? 'password' : 'text'))
  }

  const suffixElement = () => {
    if (clear && !suffix && !!value) {
      return (
        <InputAdornment position="end">
          <IconButton className="clr-btn" onClick={handleClear} edge="end">
            <Cancel />
          </IconButton>
        </InputAdornment>
      )
    } else if (!!suffix) {
      return <InputAdornment position="end">{suffix}</InputAdornment>
    } else if (!suffix && !!value && type?.toLowerCase() === 'password') {
      return (
        <InputAdornment position="end">
          <IconButton className="pass-rvl-btn" onClick={toggleType} edge="end">
            {textType === 'text' ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    } else {
      return null
    }
  }

  return (
    <div
      className={'txt-field-wrap' + labelStatus + errorStatus + disabledStatus}
    >
      <FormControl
        className={'txt-field' + (!!className ? ` ${className}` : '')}
        variant="outlined"
        size="small"
      >
        {!!label && <label className="txt-field-label">{label}</label>}
        <OutlinedInput
          className="txt-field-inp"
          placeholder={placeholder}
          value={value}
          name={name}
          // type={textType === 'number' ? 'text' : textType}
          type={textType}
          onChange={handleChange}
          // inputComponent={textType === 'number' ? NumFormat : undefined}
          inputProps={inputProps}
          defaultValue={defaultValue}
          startAdornment={
            !!prefix && (
              <InputAdornment position="start">{prefix}</InputAdornment>
            )
          }
          endAdornment={suffixElement()}
          {...rest}
        />
      </FormControl>
      {!!error && typeof error !== 'object' && (
        <label className="txt-field-error err-msg">{error}</label>
      )}
    </div>
  )
}

export default Textfield
