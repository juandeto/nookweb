import React from 'react';

import classes from './ArrowRight.module.css' 

const arrowRight =(props) => {
    let classesArrowRight=[classes.ArrowRight];
    if(props.screenWidth > 500){
        classesArrowRight.push(classes.Desktop)
    }
   return( <svg
    className={classesArrowRight.join(' ')}
    onClick={() => props.goToRight(props.pathname)}
      width="37"
      height="50"
      viewBox="0 0 37 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2L33 38.8L5.17391 72" stroke="#404145" strokeWidth="6" />
    </svg>)
  };

  export default arrowRight;