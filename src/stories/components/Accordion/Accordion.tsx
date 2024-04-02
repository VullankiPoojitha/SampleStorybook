// import React, { useState } from 'react';
// import './AccordionStyles.css'; // Import your CSS file with accordion styles

// export interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// export const Accordion: React.FC<AccordionProps> = ({ title='Header', children='content' }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <div className="accordion-title">{title}</div>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
//       </div>
//       <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
//         {children}
//       </div>
//     </div>
//   );
// };



// import React, { useState, useRef, useEffect } from 'react';
// import './AccordionStyles.css'; // Import your CSS file with accordion styles

// export interface AccordionProps {
//   title: string;
//   children: React.ReactNode;
// }

// export const Accordion: React.FC<AccordionProps> = ({ title = 'Header', children='dfghjkl' }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [contentHeight, setContentHeight] = useState<number>(0); // Initialize with 0 instead of null

//   useEffect(() => {
//     if (contentRef.current) {
//       setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
//     }
//   }, [isOpen]);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <div className="accordion-title">{title}</div>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
//       </div>
//       <div
//         className="accordion-content"
//         style={{ maxHeight: contentHeight }}
//         ref={contentRef}
//       >
//         {/* Render children here */}
//         {children}
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react';
import './AccordionStyles.css'; // Import your CSS file with accordion styles

export interface AccordionProps {
  /** Title of the accordion */
  title: string;
  /** Content inside accordion */
  children?: string; 
  /** onChange event */
  onChange?: (value: any)=> void;
}

export const Accordion: React.FC<AccordionProps> = ({ title='Header', children, ...props }:AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen,'IsOpen');

  // Generate random default text
  const defaultText = 'Default Text';

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      <div className="accordion-children" style={{ padding: '15px 10px', borderTop:'1px solid lightgray' }} >
        {children || defaultText} {/* Render children or default text */}
        </div>
      </div>
    </div>
  );
};









// import React, { useState } from 'react';
// import './AccordionStyles.css'; // Import your CSS file with accordion styles

// export interface AccordionProps {
//   title: string;
//   children?: any; 
//   onChange: (value:any)=> void;
// }

// export const Accordion: React.FC<AccordionProps> = ({ title='Header', children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   // Generate random default text
//   const defaultText = 'Default Text';

//   const handleChange =(e: any)=>{
// console.log(e.target.value)
//   }

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <div className="accordion-title">{title}</div>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
//       </div>
//       <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
//         <div className="accordion-children" style={{ padding: '15px 10px', borderTop:'1px solid lightgray' }} >
//           {children || defaultText} {/* Render children or default text */}
//         </div>
//       </div>
//     </div>
//   );
// };










// lattest Code




// import React, { useState } from 'react';
// import './AccordionStyles.css'; // Import your CSS file with accordion styles

// export interface AccordionProps {
//   title: string;
//   children?: string; 
//   onChange: (value:any)=> void;
// }

// export const Accordion: React.FC<AccordionProps> = ({ title='Header', children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   // Generate random default text
//   const defaultText = 'Default Text';

//   const handleChange =(e: any)=>{
// console.log(e.target.value)
//   }

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <div className="accordion-title">{title}</div>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
//       </div>
//       <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
//         <div className="accordion-children" style={{ padding: '15px 10px', borderTop:'1px solid lightgray' }} >
//           {children || defaultText} {/* Render children or default text */}
//         </div>
//       </div>
//     </div>
//   );
// };







// import React, { useState } from 'react';
// import './AccordionStyles.css'; // Import your CSS file with accordion styles

// export interface AccordionProps {
//   title: string;
//   children?: React.ReactNode; 
//   onChange: (value:any)=> void;
// }

// export const Accordion: React.FC<AccordionProps> = ({ title='Header', children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   // Generate random default text
//   const defaultText = 'Default Text';

//   return (
//     <div className="accordion">
//       <div className="accordion-header" onClick={toggleAccordion}>
//         <div className="accordion-title">{title}</div>
//         <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#9660;</div>
//       </div>
//       <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
//         <div className="accordion-children" style={{ padding: '15px 10px', borderTop:'1px solid lightgray' }}>
//           {children || defaultText} {/* Render children or default text */}
//         </div>
//       </div>
//     </div>
//   );
// };








