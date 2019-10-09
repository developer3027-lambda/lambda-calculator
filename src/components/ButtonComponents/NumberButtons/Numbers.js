import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';


const Numbers = () => {
  const [num, setNum] = useState(numbers);
  

  return (

    <div className='num-box'>
    {num.map((number, index) => (
      <NumberButton key={index} number={number} />
    ))}
    </div>
  );
}

export default Numbers;
