import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size , setSize] = useState(window.innerWidth);
  console.log(size)

  const checkSize = ()=>{
    setSize(window.innerWidth);
  }


  useEffect(()=>{
    window.addEventListener("resize", checkSize);
  })
  return (
    <>
    <h1> {size}PX  </h1>
    
    </>  
  );
};

export default UseEffectCleanup;
