import React from "react";

const SpecialButton = props => {
  return (
    <div className=''>
    <button className='button' 
    >{props.number}</button>
    </div>
  );
};

export default SpecialButton;