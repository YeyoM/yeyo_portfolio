import '../App.css'
import axios from 'axios'
import { useState } from 'react'
import BadNotification from './BadNotification'
import GoodNotification from './GoodNotification'


const ContactContainer = () => {

  const formId = process.env.REACT_APP_FORM_ID
  const formSparkUrl = `https://submit-form.com/${formId}`

  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [newMessageError, setNewMessageError] = useState(null)
  const [newMessageSuccess, setNewMessageSuccess] = useState(null)

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewEmail = (event) => {
    setNewEmail(event.target.value)
  }

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value)
  }

  const submitFormContact = async (event) => {
    event.preventDefault()
    await postSubmission().catch(e => console.log(e))
  }

  const postSubmission = async () => {
    const payload = {
      name: newName,
      message: newMessage,
      email: newEmail
    }

    if (payload.name && payload.message && payload.email) {
      try {
        const result = await axios.post(formSparkUrl, payload)
        if (result.status === 200) {
          setNewName('')
          setNewMessage('')
          setNewEmail('')
          setNewMessageSuccess("Awesome, we'll keep in touch")
          setTimeout(() => {
            setNewMessageSuccess(null)
          }, 5000)
        } else if (result.status !== 202) {
          setNewMessageError('Oops, something went wrong, try again later :(')
          setTimeout(() => {
            setNewMessageError(null)
          }, 5000)
        }
      } catch (err) {
        setNewMessageError('Oops, something went wrong, try again later :(')
        setTimeout(() => {
          setNewMessageError(null)
        }, 5000)
      }
    } else {
      setNewMessageError('Oops, something is missing')
        setTimeout(() => {
          setNewMessageError(null)
        }, 5000)
    }
  }

  return (
		<div className="contact-form">
      <a name="contact"></a>
      <div className="form-container">
        <form onSubmit={submitFormContact}>
          <BadNotification message={newMessageError} />
          <GoodNotification message={newMessageSuccess} />
          <p className="form-title">Send me an email</p>
          <div className="form-section">
            <label className="form-label">Your name</label>
            <input type="text" placeholder="Your name here..." className="form-input" value={newName} onChange={handleNewName}/>
          </div>
          <div className="form-section">
            <label className="form-label">Your email</label>
            <input type="email" placeholder="Your email adress here..." className="form-input" value={newEmail} onChange={handleNewEmail}/>
          </div>
          <div className="form-section">
            <label className="form-label">Your message</label>
            <textarea type="text" placeholder="Your message here..." className="form-input" value={newMessage} onChange={handleNewMessage}/>
          </div>
          <button className="contact-button">
            Send it!
          </button>
        </form>
      </div>
      
		</div>
  )
}

export default ContactContainer
