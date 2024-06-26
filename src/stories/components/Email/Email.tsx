import React ,{HTMLAttributes, ReactNode, useState, useEffect} from'react';
import { withConsole } from '@storybook/addon-console';


export interface EmailProps extends HTMLAttributes<HTMLInputElement>{
    /** Button text */
    // children: ReactNode;
   
    
   
    /** Button size */
    size?:'small' | 'medium' | 'large';
    /** OnChange event */
    onChange: (value:any)=> void;
    /** font size of text */
    fontSize?:any;
    /** Adding border */
    border?:any;
    /** Place holder Text */
    placeholderText?:any;
    borderRadius?: any;
    /** Border radius */
    /** Input value */
    value?: any;
}
export const  EmailInput =({children,size='medium',fontSize='16px', placeholderText='Enter Email',border='1px solid gray',borderRadius='8px',value='',onChange,...props}:EmailProps) => {
    const [inputValue, setInputValue] = useState('')
const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    onChange(e);
    setInputValue(e.target.value);
}


useEffect(()=>{
setInputValue('');

if(value){
setInputValue(value);
}
},[value])

    return(
        <input {...props} style={{padding:size ==='medium' ? '10px': size === 'large' ? '15px' :size === 'small' ? '5px' : '', 
        borderRadius:borderRadius,cursor:'pointer', border:border, fontSize:fontSize}} 
        placeholder={placeholderText} value={inputValue} onChange={handleChange} type='email'/>
    )
}



