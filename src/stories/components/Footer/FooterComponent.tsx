import React from 'react';
import './FooterStyles.css'; // Import CSS file for styling

export interface FooterProps {
    /** Data related to footer */
    companyName: string;
    /** Data related to footer */
    year: string;
    /** Background color */
    background?: string;
    /** Font color */
    color?:string;
    /** Padding */
    padding: number;
    /** Align the text */
    textAlign: any;
}

export const FooterComponent= ({ companyName='XYZ', year='1945',background,color,padding,textAlign, ...props }:FooterProps) => {
    return (
        <footer className="footer" style={{background, padding,textAlign}} {...props}>
            <div className="footer-content" style={{color}}>
                <div>
                    &copy; {year} {companyName}. All rights reserved.
                </div>
                
            </div>
        </footer>
    );
};

