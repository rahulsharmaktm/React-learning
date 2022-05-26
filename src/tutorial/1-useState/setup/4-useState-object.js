import React, { useState } from 'react';

const UseStateObject = () => {
  const [people , setPeople] = useState({
    name: 'sachin',
    age: 26,
    phoneNumber: 4534534534,
  })
 const changeValue =()=>{
  setPeople({...people, age: 33}); 
 }
 
return(
  <>
  <h1>{people.name}</h1>
  <h1>{people.age}</h1>
  <h1>{people.phoneNumber}</h1>
  <button className='btn' onClick={changeValue}>change</button>
  
  </>
)
};

export default UseStateObject;
