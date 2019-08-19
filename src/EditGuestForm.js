import React, { useState } from 'react'

const EditGuestForm = props => {
  const [guest, setGuest] = useState(props.currentGuest)

  const handleInputChange = event => {
    const { name, value } = event.target

    setGuest({ ...guest, [name]: value })
  }

  return (
    <form
      // onSubmit={event => {
      //   event.preventDefault()
      //   props.updateGuest(guest.id, guest.displayName)
      // }}
    >
      <label>Name</label>
      <input type="text" name="displayName" value={guest.name} onChange={handleInputChange} />
      <label>Details</label>
      <input type="text" name="details" value={guest.details} onChange={handleInputChange}/>
      <label>Menu</label>
      <input type="text" name="menu" value={guest.menu} onChange={handleInputChange}/>
      <button onClick={() => props.updateGuest(guest.id, guest.displayName)} className="button muted-button">
        Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel editing
      </button>
    </form>
  )
}

export default EditGuestForm