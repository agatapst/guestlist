import React, { useState } from 'react'

const AddUserForm = props => {
    const InitialGuestForm = {id: null, displayName: '', details: '', menu: ''}
    const [guest, setGuest] = useState(InitialGuestForm)

    const handleInputChange = event => {
        const { name, value } = event.target
        setGuest({ ...guest, [name]: value })
    }

  return (
    <form onSubmit={event => {
        event.preventDefault()

        props.addGuest(guest)
        setGuest(InitialGuestForm)
      }}>
      <label>Name</label>
      <input type="text" name="displayName" value={guest.displayName} onChange={handleInputChange} required/>
      <label>Details</label>
      <input type="text" name="details" value={guest.details} onChange={handleInputChange}/>
      <label>Menu</label>
      <input type="text" name="menu" value={guest.menu} onChange={handleInputChange}/>
      <button>Add new guest</button>
    </form>
  )
}

export default AddUserForm