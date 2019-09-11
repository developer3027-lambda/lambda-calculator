import React, {useState} from "react";
import NumberButton from '../NumberButtons/NumberButton';
import {numbers} from '../../../data';

function Numbers() {
const [numNumbers] = useState(numbers);

  return (
    <>
       numNumbers.map((numbers, index) => (
          <numButton key={index} numbers={numbers} />
        ))
    </>
  )
}
export default Numbers;