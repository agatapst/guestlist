import React, { useState } from 'react'

const AddUserForm = props => {
    const InitialGuestForm = {id: null, name: '', details: '', menu: ''}
    const [guest, setGuest] = useState(InitialGuestForm)

    const handleInputChange = event => {
        const { name, value } = event.target
        setGuest({ ...guest, [name]: value })
      }

  return (
    <form onSubmit={event => {
        event.preventDefault()
        if (!guest.name) return

        props.addGuest(guest)
        setGuest(InitialGuestForm)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={guest.name} onChange={handleInputChange}/>
      <label>Details</label>
      <input type="text" name="details" value={guest.details} onChange={handleInputChange}/>
      <label>Menu</label>
      <input type="text" name="menu" value={guest.menu} onChange={handleInputChange}/>
      <button>Add new guest</button>
    </form>
  )
}

export default AddUserForm