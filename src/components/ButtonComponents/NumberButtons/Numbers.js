import React, {useState} from "react";
import {numbers, specials, operators} from '../../../data';
import NumberButton from './NumberButton';



const Numbers = () => {
  const [Num, setNum] = useState(numbers);

  // STEP 2 - add the imported data to state
  return (
    <div>
    {Num.map((number, index) => (
      <NumberButton key={index} number={number} />
    ))}
    
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
