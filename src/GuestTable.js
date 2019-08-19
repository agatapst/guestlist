import React from 'react';

const GuestTable = (props) => (
   <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Details</th>
        <th>Menu</th>
      </tr>
    </thead>
    <tbody>
        { props.guestsList.length > 0 ? (
            props.guestsList.map(guest => 
                <tr key={guest.id}>
                    <td>{guest.displayName}</td>
                    <td>{guest.details}</td>
                    <td>{guest.menu}</td>
                    <td>
                        <button onClick={() => props.deleteGuest(guest.id)}>DELETE</button>
                        <button onClick={() => props.editFormView(guest)}>EDIT</button>
                    </td>
                </tr>)
        ) : 
        <tr>
            <td>nope</td>
        </tr>
        }
    </tbody>
   </table> 
)

export  default GuestTable