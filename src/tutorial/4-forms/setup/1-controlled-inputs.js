import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = {id: new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <div>
      <form onClick={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
      {people.map((item, index)=>{
        const {id, name, email}= item;
        return(
          <>
        <div key={id}>
        <h4>{name}</h4>
          <p>{email}</p>
        </div>
          </>
        )

      })}
    </div>
  );
};

export default ControlledInputs;
