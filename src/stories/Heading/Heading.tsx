import React from 'react';
import './HeadingStyles.css';

export interface HeadingProps{
    color?:string;
    fontSize?:number;
    background?:string;
//     /** Width of the spinner */
// width:string;
//     /** Height of the spinner */

// height:string;
//     /** border of the spinner */

// border:string;
//     /** border of the spinner */

// borderTop:string;


}

export const Heading =({color,fontSize,background,...props}:HeadingProps)=>{
    return (
        // <div className="pos-center">
        <div {...props} className='headingStyles' style={{color,fontSize,background}}>Heading</div>
    //   </div>
    )
}