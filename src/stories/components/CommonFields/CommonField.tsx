import React, {HTMLAttributes} from 'react';
import './CommonFeildStyles.css';


export interface CommonFieldProps {
size?: 'small' | 'medium' | 'large';
label?: string;
onClick?:()=>void;
type?: string;
}


export const CommonField =({size,type,...props}:CommonFieldProps)=>{

  return(
    <input type={type}  className='inputstyles'/>
  )

}