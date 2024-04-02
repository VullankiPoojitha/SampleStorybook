import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Button text */
    children: ReactNode;
    /** Button default background color */
    variant:'primary' | 'secondary';
    /** Update the background color dynamically */
    backgroundColor?: string;
    /** Button size */
    size?:'small' | 'medium' | 'large';
    /** onClick event */
    onClick?: ()=> void;
}

/** This is Common Button */
export const CommonButton = ({children,variant='primary',size='medium',backgroundColor=variant==='primary'?'blue':'green', ...props}:Props)=>{
    return(
        // <button {...props} style={{background:variant==='primary'?'blue':'green', border:'none', color:'white',padding:size ==='medium' ? '10px': size === 'large' ? '50px' :size === 'small' ? '5px' : '', borderRadius:'8px',cursor:'pointer'}}>{children}</button>
        <button {...props} style={{background:backgroundColor, border:'none', color:'white',padding:size ==='medium' ? '10px': size === 'large' ? '15px' :size === 'small' ? '5px' : '', borderRadius:'8px',cursor:'pointer'}}>{children}</button>

    )
}