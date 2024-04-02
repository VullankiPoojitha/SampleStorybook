import React, { useState,HTMLAttributes ,MouseEventHandler, useEffect} from 'react';
import './LeftNavBarStyles.css';
import hamburger from '../../assets/svgIcons/hamburger.svg';


const data:string[] = ['Home','About','Services','Contact']

// export interface LeftNavBarProps extends MouseEventHandler<HTMLLIElement>{
export interface LeftNavBarProps{
  /** onClick event */
    onClick?:(value:string|undefined) =>void;
    /** Background color */
    background?:string;
    /** Font size */
    fontSize?: any;
    /** Padding */
    padding?:any;
    /** Text color */
    color?:string;
    /** Border */
    borderBottom?:string;
}


export const LeftNavBar = ({onClick,background,fontSize='16px',padding,color,borderBottom,...props}: LeftNavBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectValue] = useState('');


  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

//   const handleClick = (e?:any,i?:string)=>{
//     console.log(e.target.value,i,'eeeeeeeeeeeeeee')
//     const clickedItem = e.currentTarget.textContent;
//     console.log('Item clicked:', clickedItem);
//     onClick(e)
//   }

  const handleClick = (i: string) => { // Accept a string parameter
    console.log(i, 'clicked'); // Log the clicked item
    onClick?.(i); // Call the onClick prop with the clicked item
    setSelectValue(i);
};

useEffect(()=>{
    setIsOpen(!isOpen);
},[selectedValue])


console.log(selectedValue,'selectedValue')

  return (
    <div>
    <div className={`left-nav-container ${isOpen ? 'open' : ''}`} style={{background,fontSize:fontSize,padding}} {...props}>
      <button className="toggle-btn" onClick={toggleNavBar}>
        {isOpen ? (
          <span style={{color:'white'}}>x</span> // "x" icon
        ) : (
          <img src={hamburger} alt='hamburger' style={{marginLeft:'40px'}}/> // hamburger icon
        )}
      </button>
      <div className="left-nav-bar">
        <ul>
            {
                data.map((i:string)=>{
                 return   <li key={i} onClick={()=>handleClick(i)} style={{borderBottom}}><a href="#" target='_self' style={{color}}>{i}</a></li>
                })
            }
       
        </ul>
        {/* <ul>
  {data.map((i: string) => (
    <li key={i} onClick={() => handleClick(i)}>
      <a href="#">{i}</a>
    </li>
  ))}
</ul> */}
        {/* <ul>
    {
        data.map((i: string) => {
            return <li key={i}><a href="#">{i}</a></li>;
        })
    }
</ul> */}

      </div>
    </div>
 
    <div className="text-styles">{!isOpen && selectedValue && <div>{selectedValue}</div>}</div>


    </div>
  );
}

