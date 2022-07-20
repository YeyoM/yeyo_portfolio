import React from 'react'
import classes from './GoodNotification.module.css'

const GoodNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={successMessage}>
      {message}
    </div>
  )
}

export default GoodNotification