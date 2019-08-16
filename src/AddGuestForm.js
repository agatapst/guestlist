import React, { useState } from 'react'

const AddUserForm = props => {

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name"/>
      <label>Details</label>
      <input type="text" name="details"/>
      <label>Menu</label>
      <input type="text" name="menu"/>
      <button>Add new guest</button>
    </form>
  )
}

export default AddUserForm