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
                    <td>{guest.name}</td>
                    <td>{guest.details}</td>
                    <td>{guest.menu}</td>
                    <td>
                        <button>DELETE</button>
                        <button>EDIT</button>
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