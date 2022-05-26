import React, { useState } from "react";

const UseStateCounter = () => {
  const [value , setValue] = useState(0);


  const ResetValue=()=>{
    setValue([0]);

  }
  const complexIncrease =()=>{
    setTimeout(()=>{
      // setValue(value+1);
      setValue((oldValue)=>{
        return oldValue +1;

      })

    },2000)
  }
 
return(
<>
  <div>
    <h1>{value
    }</h1>
    <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
    <button className="btn" onClick={ResetValue}>Reset</button>
    <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
  </div>
  <div>
    <h1>{value
    }</h1>
   
    <button className="btn" onClick={complexIncrease}>complexIncrease</button>

  </div>
  </>
);
};

export default UseStateCounter;
