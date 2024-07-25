import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstname: '', lastname: '' });

  function handleFirstName(e) {
    setName({...name, firstname: e.target.value})
    console.log(e.target.value);
  }

  function handlelastName(e) {
    setName({...name, lastname: e.target.value})
    console.log(e.target.value);
  }
  return (
    <div>
      <h2>
        {name.firstname}
        {name.lastname}
      </h2>
      <form>
      <label>firstname</label>
      <input
        type="text"
        id="firstname"
        value={name.firstname}
        onChange={(e) => {
          handleFirstName(e);
        }}
      />
      <label>lastname</label>
      <input
        type="text"
        id="lastname"
        value={name.lastname}
        onChange={(e) => {
          handlelastName(e);
        }}
      />
      </form>
    </div>
  );
};

export default Form;
