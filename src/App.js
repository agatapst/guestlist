import React, { useState } from 'react';
import './App.css';
import GuestTable from './GuestTable'
import AddGuestForm from './AddGuestForm'

const App = () => {
  const initialGuests = [
    { id: 1, name: 'Kasia', details: 'with husband', menu: 'vegan'},
    { id: 2, name: 'Basia', details: 'will be late', menu: 'classic' },
  ]

  const [guests, setGuests] = useState(initialGuests)

  return (
    <div>
      <h1>Wanna invite somebody?</h1>
      <AddGuestForm />
      <h1>Your Guests:</h1>
      <GuestTable guestsList={guests} />  
    </div>
  )
}

export default App;
