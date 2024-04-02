import React from 'react';
import './SpinnerStyles.css';

export interface SpinnerProps{
    /** Width of the spinner */
width:string;
    /** Height of the spinner */

height:string;
    /** border of the spinner */

border:string;
    /** border of the spinner */

borderTop:string;


}

export const Spinner =({width,height,border,borderTop,...props}:SpinnerProps)=>{
    return (
        // <div className="pos-center">
        <div className="loader" {...props} style={{width,height,border,borderTop}}></div>
    //   </div>
    )
}