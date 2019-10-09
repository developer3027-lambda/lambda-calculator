import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';


const Operators = () => {
  const [ops, setOps] = useState(operators);
  console.log(operators)

  return (

    <div>

    {ops.map((item, index) => (
      <OperatorButton key={index} number={item.char} />
    ))}

    </div>
  );
}

export default Operators;