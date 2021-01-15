import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import clsx from 'clsx'

const useStyle = makeStyles({
  rounded: {
    borderRadius: 15,
    padding: '36px 24px'
  }
})

function Card({ children, className }) {
  const classes = useStyle()

  return (
    <Paper
      elevation={0}
      square={false}
      className={clsx('card-block', className)}
      classes={classes}
    >
      {children}
    </Paper>
  )
}

export default Card
