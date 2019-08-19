import React, { useState, useEffect } from 'react'

// 3. set the state directly from the previously clicked currentUser via props
const EditGuestForm = props => {
  const [guest, setGuest] = useState(props.currentGuest)

  const handleInputChange = event => {
    const { name, value } = event.target

    setGuest({ ...guest, [name]: value })
  }

  // 3. inability to edit second guest - the component is already open, 
  // and although the state on the parent has changed, it's not registered down to the props.
  // We want to let the EditGuestForm component know the props have changed.

  // Hook useEffect accepts two arguments. It doesn’t return anything. 
  // The first parameter is a function and it holds the code you want to run. 
  // The optional second parameter indicates when you want this hook to be called. 
  // If you don’t pass anything - function will be called on mount and every rendered update. 
  // If you pass an array of values (i.e. props or values from state) the function will 
  // be called on mount and whenever any of those values change.
  useEffect(() => {
    setGuest(props.currentGuest)
  }, [props])

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