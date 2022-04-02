import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(1);


  const complexIncrease = () =>{
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState +1;
      })
    }, 2000);
  }
  

 
 
  return (
    <div className="container">
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1> {value} </h1>
        <button
          className="btn"
          onClickCapture={(decreaseValue) => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClickCapture={(decreaseValue) => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue([]);
          }}
        >
          reset
        </button>
        <button className="btn" onClick={complexIncrease}>Increase Later</button>
      </section>
    </div>
  );
};

export default UseStateCounter;
