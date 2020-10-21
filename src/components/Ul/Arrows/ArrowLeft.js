import React from 'react';

import classes from './ArrowLeft.module.css' 

const arrowLeft = (props)=> {
    let classesArrowLeft=[classes.ArrowLeft]
    if(props.screenWidth > 500){
        classesArrowLeft.push(classes.Desktop)
    }
   return( 
   <svg
    className={classesArrowLeft.join(' ')}
    onClick={() => props.goToLeft(props.pathname)}
      width="37"
      height="50"
      viewBox="0 0 37 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M34 72L4 35.2L31.8261 2" stroke="#404145" strokeWidth="6" />
    </svg>
    )
  };

  export default arrowLeft;