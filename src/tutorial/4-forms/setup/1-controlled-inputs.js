import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");

  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const haldleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    
    if(person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: " " });
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label>Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              id="name"
              value={person.firstName}
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={person.email}
            />
          </div>
          <div className="form-control">
            <label>Age</label>
            <input
              onChange={handleChange}
              type="number"
              name="age"
              id="age"
              value={person.age}
            />
          </div>
          <button type="submit" onClick={haldleSubmit} className="btn">
            Add Person
          </button>
        </form>

        <div className="">
          {people.map((item) => {
            const { id, firstName, email, age } = item;
            return (
              <div key={id}>
                <h1> {firstName} </h1>
                <h1> {email} </h1>
                <h1> {age} </h1>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ControlledInputs;
