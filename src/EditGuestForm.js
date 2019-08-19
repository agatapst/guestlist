import React, { useState } from 'react'

const EditGuestForm = props => {
  const [guest, setGuest] = useState(props.currentGuest)

  const handleInputChange = event => {
    const { name, value } = event.target

    setGuest({ ...guest, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateGuest(guest.id, guest)
      }}
    >
      <label>Name</label>
      <input type="text" name="displayName" value={guest.displayName} onChange={handleInputChange} />
      <label>Details</label>
      <input type="text" name="details" value={guest.details} onChange={handleInputChange}/>
      <label>Menu</label>
      <input type="text" name="menu" value={guest.menu} onChange={handleInputChange}/>
      <button>
        Update user</button>
      <button onClick={() => props.setEditing(false)}>
        Cancel editing
      </button>
    </form>
  )
}

export default EditGuestForm