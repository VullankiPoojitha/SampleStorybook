import React ,{HTMLAttributes, ReactNode, useState, useEffect} from'react';
import { withConsole } from '@storybook/addon-console';


export interface InputProps extends HTMLAttributes<HTMLInputElement>{
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
export const  InputText =({children,size='medium',fontSize='16px', placeholderText='',border='1px solid gray',borderRadius='8px',value='',onChange,...props}:InputProps) => {
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
        placeholder={placeholderText} value={inputValue} onChange={handleChange} />
    )
}








// import React ,{HTMLAttributes, ReactNode, useState} from'react';
// import { withConsole } from '@storybook/addon-console';


// export interface InputProps extends HTMLAttributes<HTMLInputElement>{
//     /** Button text */
//     // children: ReactNode;
   
    
   
//     /** Button size */
//     size?:'small' | 'medium' | 'large';
//     /** onClick event */
//     onChange: (value: any)=> void;
//     fontSize?:any;
//     border?:any;
//     placeholderText?:any;
//     borderRadius?: any;
//     value: any;
// }
// export const  InputText =({children,size='medium',fontSize='16px', placeholderText='',border='1px solid gray',borderRadius='8px',value,onChange,...props}:InputProps) => {
    
//     return(
//         <input {...props} style={{padding:size ==='medium' ? '10px': size === 'large' ? '15px' :size === 'small' ? '5px' : '', 
//         borderRadius:borderRadius,cursor:'pointer', border:border, fontSize:fontSize}} 
//         placeholder='please enter' value={value} onChange={(e)=>onChange(e)} />
//     )
// }

