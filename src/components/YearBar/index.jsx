import React from 'react'
import clsx from 'clsx'
import './style.scss'
import { Grid } from '@material-ui/core'

const YearBox = ({ value, label, onClick, years }) => (
  <div
    style={{ width: `calc(100%/${years})` }}
    className={clsx('year-box', {
      'fill-bar': value >= label,
      selected: value === label
    })}
  >
    <div className="selection-circle" onClick={onClick.bind(this, label)}>
      {label}
    </div>
  </div>
)

function YearBar({ years = 10, value, onClick }) {
  const handleClick = (value) => {
    onClick && onClick(value)
  }

  const yearStepper = () => {
    let renderYearBox = []
    for (let i = 1; i <= years; i++) {
      renderYearBox.push(
        <YearBox value={value} onClick={handleClick} label={i} years={years} />
      )
    }
    return renderYearBox
  }

  return <div className="year-bar-wrap">{yearStepper()}</div>
}

export default YearBar
