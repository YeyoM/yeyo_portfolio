import React from 'react'

const GoodNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="success-message">
      {message}
    </div>
  )
}

export default GoodNotification