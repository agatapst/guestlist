import React, { useState } from 'react';
import './App.css';
import GuestTable from './GuestTable'
import AddGuestForm from './AddGuestForm'
import Searchbar from './Searchbar'
import EditGuestForm from './EditGuestForm'

const App = () => {
  const InitialGuests = [
    { id: 1, displayName: 'Kasia', details: 'with husband', menu: 'vegan'},
    { id: 2, displayName: 'Basia', details: 'will be late', menu: 'classic' },
    { id: 3, displayName: 'Marysia', details: 'will be late', menu: 'glutenfree' },
    { id: 4, displayName: 'Asia', details: 'not sure', menu: 'no fish' }
  ]

  // ADD
  const [guests, setGuests] = useState(InitialGuests)
    const addNewGuest = newGuest => {
    newGuest.id = guests.length + 1
    setGuests([...guests, newGuest])
  }

  // DELETE
  const deleteGuest = id => {
    setGuests(guests.filter(guest => guest.id !== id))
  }

  // SEARCH
  const [query, setQuery] = useState("")
  const filterGuests = guests => {
    return guests.filter(guest => guest.displayName.toLowerCase().includes(query.toLowerCase()))
  }

  // EDIT
  const [editing, setEditing] = useState(false)
  const initialFormState = {id: null, displayName: '', details: '', menu: ''}
  const [currentGuest, setCurrentGuest] = useState(initialFormState)

  const editFormView = guest => {
    setEditing(true)
    setCurrentGuest({ id: guest.id, name: guest.displayName, details: guest.details, menu: guest.menu })
  }

  const updateGuest = (id, updatedGuest) => {
    setEditing(false)
    setGuests(guests.map(guest => (guest.id === id ? updatedGuest : guest)))
  }

  return (
    <div>
      { editing ? (
        <div>
          <h1>Edit guest</h1>
          <EditGuestForm 
            editing={editing}
            setEditing={setEditing}
            currentGuest={currentGuest}
            updateGuest={updateGuest}
          />
        </div>
      ) : (
        <div>
          <h1>Let's invite somebody</h1>
          <AddGuestForm addGuest={addNewGuest} />
        </div>
      )}

      <div>
        <h1>Your Guests:</h1>
        <Searchbar search={setQuery}/>
        <GuestTable guestsList={filterGuests(guests)} deleteGuest={deleteGuest} editFormView={editFormView} />  
      </div>
    </div>
  )
}

export default App;
