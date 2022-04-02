import React, { useState } from 'react';

const UseStateObject = () => {
  const [person , setPerson] = useState({
    name: 'sachin',
    age: '29',
    msg: 'Hello world'
  })
  const changeValue = ()=>{
    setPerson({...person, msg:"Hello world change"})
  }
  return  <div className='container'>
      
  <h1> {person.name} </h1>
  <h1> {person.age} </h1>
  <h1> {person.msg} </h1>
  <button className='btn' onClick={changeValue}>Change value</button>
</div>
};

export default UseStateObject;
