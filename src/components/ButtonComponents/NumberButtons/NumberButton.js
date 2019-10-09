import React from "react";


const NumberButton = props => {
  return (
    <div classname=''>
    <button className='button' 
    >{props.number}</button>
    </div>
  );
}

export default NumberButton;