import React from 'react'
import { TextField } from '@material-ui/core'

function Question({ data }) {
  return (
    <div className="question-wrap">
      <p className="question">{data.question}</p>
      <div className="field-wrap">
        {data.fields.map((i, index) => (
          <TextField className="qus-field" label={i.label} name={i.name} />
        ))}
      </div>
    </div>
  )
}

export default Question
