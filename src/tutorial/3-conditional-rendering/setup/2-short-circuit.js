import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "joh"}</h1>
      {/* {text && <h1>And</h1>}
      {!text && <h1>Text not ture</h1>} */}
      <button className="btn" onClick={() => setError(!error)}>
        Toggle Error
      </button>
      {/* {error && <h1>Error..</h1>} */}
      {error ? (
        <h3>there is an error...</h3>
      ):(
        <h1>
          there is no error
        </h1>
      )}
    </>
  );
};

export default ShortCircuit;
