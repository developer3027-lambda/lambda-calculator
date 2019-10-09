import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';


const Specials = () => {
  const [spec, setSpec] = useState(specials);

  return (
    <div className=''>
    {spec.map((item, index) => (
      <SpecialButton key={index} number={item} />
    ))}
    </div>
  );
};

export default Specials;
