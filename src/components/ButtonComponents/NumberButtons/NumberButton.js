import React from "react";


const NumberButton = props => {
  return (
    <div>
    <button className='' 
    >{props.number}</button>
    
    {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
}

export default NumberButton;