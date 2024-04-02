import React, { useState } from 'react';
import '../Tabs/TabsStyles.css';


 const tabs = [
    { title: 'Tab 1', content: <div>This is tab 1 content</div> },
    { title: 'Tab 2', content: <div>This is tab 2 content</div> },
    { title: 'Tab 3', content: <div>This is tab 3 content</div> },
  ];

export interface TabsProps {
    // title?: string;
    //  content?:string;
    /** background color of tabs */
     background?: string;
     /** padding */
     padding?:number;
     /** font - size */
     fontSize?:string | number;
     /** Border Radius */
     borderRadius?: number;
     /** Border to Tabs */
     border?: string;
    //  width?: number;
    //  height?: number;
    /** Adding colors to text */
     color?: string;
    //  onClick?:(value:any) =>void;
  }

 export const Tabs = ({background,color,padding,fontSize,borderRadius,border, ...props }:TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
    <div className="tab-buttons">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={index === activeTab ? 'active' : ''}
          onClick={() => handleTabClick(index)}
          style={{background, padding, fontSize, borderRadius, border, color}}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="tab-content">
      {tabs[activeTab].content}
    </div>
  </div>
  );
};




