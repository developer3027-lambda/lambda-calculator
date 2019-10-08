import React from "react";


const NumberButton = () => {
  return (
    <div>
    <button 
    className='' 
    onClick={() => props.number()}
    ></button>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
}

export default NumberButton