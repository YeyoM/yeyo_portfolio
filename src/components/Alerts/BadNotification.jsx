import React from 'react'
import classes from './BadNotification.module.css'

const BadNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classes.errorMessage}>
      {message}
    </div>
  )
}

export default BadNotification