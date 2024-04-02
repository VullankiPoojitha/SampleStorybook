import React ,{HTMLAttributes, ReactNode, useState} from 'react';

// const data:any = ['React', 'Javascript', 'Css', 'Html'];

// export interface DropdownProps extends HTMLAttributes<HTMLSelectElement>{
//   children?:any;
//   size?:'small' | 'medium' | 'large';
//   onChange: (value :any)=> void;
//   fontSize?:any;
//   border?:any;
// //   placeholderText?:any;
//   borderRadius?: any;
//   value?: any;
// }


const data: string[] = ['React', 'Javascript', 'Css', 'Html'];

export interface DropdownProps extends HTMLAttributes<HTMLSelectElement> {
//   children?: ReactNode;
/** Dropdown size */
  size?: 'small' | 'medium' | 'large';
  /** onChange event */
  onChange: (value: any) => void;
  /** Font-size of text */
  fontSize?: any;
  /** Border styles */
  border?: any;
  /** Border radius */
  borderRadius?: any;
//   value?: any;
/** Width of the dropdown */

  width?:string;
  /** padding to dropdown */
  padding: string;
}


export const Dropdown =({
    // children,
    size='medium',
    fontSize='16px',
    border='1px solid gray',
    borderRadius='8px',
    // value='',
    width='250',
    padding=size ==='medium' ? '10px': size === 'large' ? '15px' :size === 'small' ? '5px' : '',
    onChange,...props}:DropdownProps)=>{

        const [selectedValue, setSelectedvalue] = useState('')



    const handleChange =(e: React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value,e,'eeeeeeeeeeee')
        onChange(e);
        setSelectedvalue(e.target.value);
    }

    console.log(selectedValue,'selectedValue')
return(
    <div>
         <select name="Select Value" id="Select Value" onChange={handleChange} {...props} style={{padding:padding, 
        borderRadius:borderRadius,cursor:'pointer', border:border, fontSize:fontSize, width:width}} >
    {
      data.map((i:string, index:number)=>{
        console.log(i,'iiiiiiiiiiiii')
        return(
    <option value={i} key={index} style={{padding:'20px',height:'50px'}}>{i}</option>
        )

      })
    }
  </select>
    </div>
)
}

