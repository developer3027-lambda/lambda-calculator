import React, {useState} from "react";
import {numbers} from '../../../data';

const [numNumbers] = useState(numbers);

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
export function counter() {
  const [count, setCount] = useState(0);
}
const Numbers = () => {
  // STEP 2 - add the imported data to state
  setCount(count => count + 1);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numNumbers.map((numbers, index) => (
          <numButton key={index} numbers={numbers} />
        ))}
    </div>
  );
};
