import React, { useState } from 'react';
import './App.css';
import GuestTable from './GuestTable'
import AddGuestForm from './AddGuestForm'
import Searchbar from './Searchbar'

const App = () => {
  const InitialGuests = [
    { id: 1, name: 'Kasia', details: 'with husband', menu: 'vegan'},
    { id: 2, name: 'Basia', details: 'will be late', menu: 'classic' },
  ]

  const [guests, setGuests] = useState(InitialGuests)
   const addNewGuest = newGuest => {
    newGuest.id = guests.length + 1
    setGuests([...guests, newGuest])
  }

  const [query, setQuery] = useState("")
  const filterGuests = guests => {
    return guests.filter(guest => guest.name.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <div>
      <h1>Wanna invite somebody?</h1>
      <AddGuestForm addGuest={addNewGuest} />
      <h1>Your Guests:</h1>
      <Searchbar search={setQuery}/>
      <GuestTable guestsList={filterGuests(guests)} />  
    </div>
  )
}

export default App;
