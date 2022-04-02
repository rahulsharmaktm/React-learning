import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);
    // console.log(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {users.map((person) => {
        const {id,login, avatar_url, html_url }= person;
        return (
          <div key={id}>
            <img src={avatar_url} style={{width: '100px'}} alt="user" />
            <div className="">
              <h1> {login} </h1>
              <h1> {html_url} </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;
