import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h3>Get user</h3>
      {user.map((item) => {
        const { id, login, avatar_url, html_url } = item;
        return (
          <li key={id}>
            <h1>{login}</h1>
            <img src={avatar_url} />
            <a href={html_url}>profile</a>
          </li>
        );
      })}
    </>
  );
};

export default UseEffectFetchData;
