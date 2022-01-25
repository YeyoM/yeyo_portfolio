import React from 'react'
const BadNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error-message">
      {message}
    </div>
  )
}

export default BadNotification