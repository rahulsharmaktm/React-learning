import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [error, setError] = useState(false);

  return (
    <>
      {/* <h1>{text || "or true"}</h1>
      <h1>{text && <p>and operator true</p>}</h1>
      <h1>{!text && <p>and operator nto true</p>}</h1> */}

      <button
        className="btn"
        onClick={() => {
          setError(!error);
        }}
      >
        toggle
      </button>
      {error ? (
        <h1>there is a error</h1>
      ) : (
        <div>
          <p>no error</p>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
