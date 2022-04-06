import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const haldleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const Person = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      console.log(Person)
      setPeople((people) => {
        return [...people, Person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty valuse");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={haldleSubmit}>
          <div className="form-control">
            <label>Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="setFirstName"
              value={firstName}
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              value={email}
            />
          </div>
          <button className="btn">Add Person</button>
        </form>

        <div className="">
          {people.map((item) => {
            const { id, firstName, email } = item;
            return (
              <div key={id}>
                <h1> {firstName} </h1>
                <h1> {email} </h1>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default ControlledInputs;
