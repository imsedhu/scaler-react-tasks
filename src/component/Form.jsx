import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  function handleFirstName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function handlelastName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Form pratice</h1>
      <h2>
        {name.firstname} -
        {name.lastname}
      </h2>
      <label>firstname</label>
      <input
        type="text"
        id="firstname"
        onChange={(e) => {
          handleFirstName(e);
        }}
      />
      <label>lastname</label>
      <input
        type="text"
        id="lastname"

        onChange={(e) => {
          handlelastName(e);
        }}
      />
    </div>
  );
};

export default Form;
