// import React, {useState} from 'react';


// const data:string[]=['React', 'Javascript', 'Css', 'Html']

// export interface AutoCompleteProps{
//     padding:number
// }


// export const AutoComplete=({padding,...props}:AutoCompleteProps)=>{
//     const [inputValue, setInputValue] = useState<string>('');

//     const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
//         console.log(e.target.value)
//         setInputValue(inputValue);
//     }
//     return(
//         <div>
//             <input
//         // type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type here..."
//       />
//         </div>
//     )
// }



// import React, { useState, useEffect } from 'react';
// import './AutoCompleteStyles.css';

// const data: string[] = ['React', 'Javascript', 'Css', 'Html'];

// export interface AutoCompleteProps {
//     padding: number;
// }

// export const AutoComplete = ({ padding, ...props }: AutoCompleteProps) => {
//     const [inputValue, setInputValue] = useState<string>('');
//     const [listData, setListData] = useState<string[]>([]);
//     const [flag, setFlag] = useState<boolean>(false);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputValue(e.target.value);
//         const filtered = data.filter(option =>
//             option.toLowerCase().includes(inputValue.toLowerCase())
//           );
//           setListData(filtered);
//     };

//     const handleOptionClick = (value: string) => {
//         setInputValue(value);
//         setListData([]);
//       };
    
    
//       useEffect(()=>{
//         if(inputValue === ''){
//             setFlag(true);
//         }
//         else{
//             setFlag(false);
//         }
//       },[inputValue])


// console.log(listData,'listData')
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Type here..."
//                 className='input-styles'
//             />
//             {/* {
//                 data.map((i)=>{
//                     return(
//                         <div className='list-styles'>
//                             {i}
//                         </div>
//                     )
//                 })
//             } */}
//              {!flag && listData.length > 0 && (
//         <ul>
//           {listData.map(option => (
//             <li key={option} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//       {
//         flag && !inputValue &&  <ul>
//         {listData.map(option => (
//           <li key={option} onClick={() => handleOptionClick(option)}>
//             {option}
//           </li>
//         ))}
//       </ul>
//       }
//         </div>
//     );
// };



import React, { useState, useEffect } from 'react';
import './AutoCompleteStyles.css';

export interface AutoCompleteProps {
  options: string[];
}

const data:string[]=['React', 'Javascript', 'Css', 'Html']


export const AutoComplete: React.FC<AutoCompleteProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [flag, setFlag] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = data.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setFilteredOptions([]);
  };


  useEffect(()=>{
    if(inputValue === ''){
        setFlag(true);
    }
    else{
        setFlag(false);
    }

  },[inputValue])

console.log(flag,options,inputValue,'flagggggggggg')

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
        className='input-styles'
      />
      {!flag && filteredOptions.length > 0 && (
        <div>
          {filteredOptions.map(option => (
            <div key={option} onClick={() => handleOptionClick(option)} className='list-styles'>
              {option}
            </div>
          ))}
       </div>
      )}
      {
        flag && !inputValue &&  
        <div>
        {data.map(option => (
          <div key={option} onClick={() => handleOptionClick(option)} className='list-styles'>
            {option}
          </div>
        ))}
      </div>
      }
    </div>
  );
};




// import React, { useState } from 'react';

// interface AutocompleteProps {
//   options: string[];
// }

// const Autocomplete: React.FC<AutocompleteProps> = ({ options }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setInputValue(value);

//     // Filter options based on input value
//     const filtered = options.filter(option =>
//       option.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredOptions(filtered);
//   };

//   const handleOptionClick = (value: string) => {
//     setInputValue(value);
//     setFilteredOptions([]);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type here..."
//       />
//       {filteredOptions.length > 0 && (
//         <ul>
//           {filteredOptions.map(option => (
//             <li key={option} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Autocomplete;
