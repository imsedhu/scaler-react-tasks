import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState({firstname: '', lastname: ''})
  return (
    <div>
    <h1>Form pratice</h1>
    <h2>{name}</h2>
    <label>firstname</label>
    <input type="text"  id="firstname" onChange={(e)=>{e.target.value}} />
    <label>lastname</label>
    <input type="text"  id="lastname" />
    </div>
  )
}

export default Form